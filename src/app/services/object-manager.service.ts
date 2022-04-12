import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import Building from '../shared/classes/building.class';
import { IElevator } from '../shared/Elevator/elevator.model';
import Elevator from '../shared/classes/elevator.class';
import { FontProviderService } from './font-provider.service';

@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public building = new Building();
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
        return this.building.createElevator(elevatorConfig);
    }

    public buildElevatorObject(elevator: Elevator): THREE.Object3D {
        const object = new THREE.Object3D();

        elevator.id = object.id;
        object.name = 'elevator';
        object.add(...elevator.getGeometry());
        object.add(...elevator.getFloorPanes(this.fontProvider.getLatoLightRegular()));

        console.log('object', object);

        return object;
    }

    public highlightSelectedElevator(elevatorId: number): void {
        const object = this.getObjectById(elevatorId);
        const box = new THREE.Box3();
        const helper = new THREE.Box3Helper(box.setFromObject(object));

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
        return;
    }

    public hasObjectInScene(): boolean {
        // TODO: implement it
        return;
    }

    public getObjectById(id: number): THREE.Object3D {
        return this.engine.getObjectById(id);
    }

    public getIdByObject(): object {
        // TODO: implement it
        return;
    }

    public getNewId(): number {
        // TODO: implement it
        return;
    }
}
