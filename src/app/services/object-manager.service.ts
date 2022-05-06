import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import { IElevator } from '../shared/Elevator/elevator.model';
import Elevator from '../shared/classes/elevator.class';
import { FontProviderService } from './font-provider.service';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';

const angle90: number = 1.5707963267948966;

// function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
//     object.rotateX(THREE.Math.degToRad(degreeX));
//     object.rotateY(THREE.Math.degToRad(degreeY));
//     object.rotateZ(THREE.Math.degToRad(degreeZ));
//  }
@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public defaultColor = new THREE.Color('rgb(0, 0, 255)');

    constructor(private engine: EngineService, private fontProvider: FontProviderService) {}

    public createCube(geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1)): THREE.Mesh {
        const cube = new THREE.Mesh(geometry);
        (<any>cube.material).color.set(this.defaultColor);
        (<any>cube.material).opacity = 0.3;

        return cube;
    }

    public createGrid(
        size: number,
        division: number,
        centerLineColor = new THREE.Color(0x000000),
        otherLineColor = new THREE.Color(0x000000)
    ): THREE.GridHelper {
        const grid = new THREE.GridHelper(size, division, centerLineColor, otherLineColor);
        (<any>grid.material).transparent = false;

        return grid;
    }

    public createElevatorConfiguration(elevatorConfig: IElevator): Elevator {
        return new Elevator(elevatorConfig);
    }

    public buildElevatorObject(elevator: Elevator, allElevators: number): THREE.Object3D {
        const object = new THREE.Object3D();
        const elevatorSelf = new THREE.Object3D();

        elevator.id = object.id;
        object.userData = { isElevatorParent: true };
        object.name = `elevator${allElevators}`;
        object.add(...this.getFloorPlatforms(elevator));
        elevatorSelf.name = 'elevatorSelf';
        elevatorSelf.add(...this.getSkeletGeometry(elevator));
        elevatorSelf.add(this.getElevatorTitle(allElevators));
        elevatorSelf.position.y = elevatorManagerSettings.defaultElevator.floorHeight * elevator.currentFloor;
        object.add(elevatorSelf);
        object.translateX(allElevators * elevatorManagerSettings.distanceBetweenElevators);

        const pane = object.getObjectByName(`floorPane${elevator.currentFloor}`);
        const text = pane.getObjectByName('floorText');

        (<any>pane).material.color.set(elevatorManagerSettings.defaultElevator.floorColorArrived);
        (<any>text).material.color.set(elevatorManagerSettings.defaultElevator.floorTextArrived);
        this.addToScene(object);

        console.log('object', object);

        return object;
    }

    public highlightSelectedElevator(elevatorId: number): void {
        const object = this.getObjectById(elevatorId);
        const clone = object.clone();
        // to avoid bug with highlight shift
        ['x', 'y', 'z'].forEach(axes => clone.position[axes] = 0);
        const helper = new THREE.BoxHelper(clone);

        helper.geometry.scale(1.1, 1, 1.1);
        helper.name = 'highlight-selection';
        object.add(helper);
    }

    public deHighlightSelectedElevator(elevatorId: number): void {
        const object = this.getObjectById(elevatorId);

        object.remove(object.getObjectByName('highlight-selection'));
    }

    public addToScene(object: any): void {
        this.engine.addToScene(object);
    }

    public removeObject(object: any): void {
        this.engine.removeFromScene(object);
    }

    public getObjectById(id: number): THREE.Object3D {
        return this.engine.getObjectById(id);
    }

    public getObjectByName(name: string): THREE.Object3D {
        return this.engine.getObjectByName(name);
    }

    public getElevatorTitle(elevatorTitle: number | string): THREE.Mesh {
        const elevatorTitleMesh = this.createFloorNumber(`Elevator ${elevatorTitle}`, 'crimson');

        elevatorTitleMesh.translateY(elevatorManagerSettings.defaultElevator.height);
        elevatorTitleMesh.translateX(-elevatorManagerSettings.defaultElevator.width / 2);
        elevatorTitleMesh.translateZ(elevatorManagerSettings.defaultElevator.length / 2);
        elevatorTitleMesh.name = 'elevator-title';

        return elevatorTitleMesh;
    }

    public getFloorPlatforms(elevator: Elevator, font: THREE.Font = this.fontProvider.getLatoLightRegular()): THREE.Mesh[] {
        const geometry = [];

        for (let i = 0; i < elevator.coveredFloors; i++) geometry.push(this.createFloor(elevator, i, font));

        return geometry;
    }

    public createFloor(elevator: Elevator, floorNumber: number, font: THREE.Font = this.fontProvider.getLatoLightRegular()): THREE.Mesh {
        const planeGeometry = new THREE.PlaneGeometry(
            elevatorManagerSettings.defaultElevator.floorLength,
            elevatorManagerSettings.defaultElevator.floorWidth
        );
        const material = new THREE.MeshBasicMaterial({
            color: elevatorManagerSettings.defaultElevator.floorColor,
            side: THREE.DoubleSide,
            opacity: elevatorManagerSettings.defaultElevator.floorOpacity,
            transparent: true
        });
        const floor = new THREE.Mesh(planeGeometry, material);

        floor.rotateX(-angle90);
        floor.translateZ(floorNumber * elevatorManagerSettings.defaultElevator.floorHeight);
        floor.translateY(-(elevatorManagerSettings.defaultElevator.floorWidth + elevator.width) / 2);

        const floorNumberMesh = this.createFloorNumber(`Floor ${floorNumber}`, elevatorManagerSettings.defaultElevator.floorText, font);

        floorNumberMesh.translateY(-elevatorManagerSettings.defaultElevator.floorWidth / 2);
        floorNumberMesh.translateX(-elevatorManagerSettings.defaultElevator.floorWidth / 2);
        floorNumberMesh.rotateX(angle90);
        floorNumberMesh.name = 'floorText';
        floor.add(floorNumberMesh);
        floor.name = `floorPane${floorNumber}`;

        return floor;
    }

    public createWireframe(elevator: Elevator, object: THREE.Mesh | THREE.Object3D, name: string = 'wireframe'): void {
        const edges = new THREE.EdgesGeometry((<any>object).geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: elevator.wireframes.color }));

        line.name = name;
        object.add(line);
    }

    private createFloorNumber(title: string, color: string, font: THREE.Font = this.fontProvider.getLatoLightRegular()): THREE.Mesh {
        const geometry = new THREE.TextGeometry(title, {
            font,
            size: 2,
            height: 0
        });

        return new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color }));
    }

    private getSkeletGeometry(elevator: Elevator): (THREE.LineSegments | THREE.Mesh)[] {
        const geometry = [];
        const floor = this.createPane(elevator, 'floor', false);
        const ceiling = this.createPane(elevator, 'ceiling', false);
        const wallLeft = this.createPane(elevator, 'wall');
        const wallRight = this.createPane(elevator, 'wall');
        const wallBack = this.createPane(elevator, 'wall');
        const doorR = this.createPane(elevator, 'door-right');
        const doorL = this.createPane(elevator, 'door-left');

        floor.rotateX(angle90);
        ceiling.rotateX(angle90);
        ceiling.translateZ(-elevator.height);
        wallLeft.translateZ(-elevator.length / 2);
        wallRight.translateZ(elevator.length / 2);
        wallBack.rotateY(-angle90);
        wallBack.translateZ(-elevator.length / 2);
        doorR.rotateY(angle90);
        doorR.translateZ(-elevator.length / 2);
        doorR.geometry.scale(0.5, 1, 1);
        doorR.translateX(elevator.length / 4);
        doorL.rotateY(angle90);
        doorL.translateZ(-elevator.length / 2);
        doorL.geometry.scale(0.5, 1, 1);
        doorL.translateX(-elevator.length / 4);

        geometry.push(floor, ceiling, wallLeft, wallRight, wallBack, doorR, doorL);

        if (elevator.wireframes.isWireframesShowed) geometry.forEach(element => this.createWireframe(elevator, element));

        return geometry;
    }

    private createPane(elevator: Elevator, name: string, isWall: boolean = true): THREE.Mesh {
        const geometry = isWall
            ? new THREE.PlaneGeometry(elevator.length, elevator.height)
            : new THREE.PlaneGeometry(elevator.length, elevator.width);
        const material = new THREE.MeshBasicMaterial({
            color: elevator.wallColor,
            side: THREE.DoubleSide,
            opacity: elevator.wallOpacity,
            transparent: elevator.wallTransparent
        });
        const pane = new THREE.Mesh(geometry, material);

        if (isWall) {
            pane.translateY(elevator.height / 2);
            pane.rotateY(angle90);
        }
        pane.name = name;

        return pane;
    }
}
