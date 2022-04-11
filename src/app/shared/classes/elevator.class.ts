import * as THREE from 'three';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';
import { IElevator } from '../Elevator/elevator.model';
import { IWireframes } from '../Elevator/childs/wireframes.model';
import { ISize } from '../Elevator/childs/size.model';
import { IEsteticWall } from '../Elevator/childs/estetic-wall.model';
import { ITechProps } from '../Elevator/childs/tech-props.model';

const angle90: number = 1.5707963267948966;

// function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
//     object.rotateX(THREE.Math.degToRad(degreeX));
//     object.rotateY(THREE.Math.degToRad(degreeY));
//     object.rotateZ(THREE.Math.degToRad(degreeZ));
//  }

export default class Elevator implements IEsteticWall, ITechProps, ISize {
    public wallColor: THREE.Color;
    public wallOpacity: number;
    public wallTransparent: boolean;
    public length: number;
    public width: number;
    public height: number;
    public capacity: number;
    public speed: number;
    public coveredFloors: number;
    public currentFloor: number;
    public wireframes: IWireframes;
    public id: number;
    public name: string;

    constructor(config: IElevator) {
        this.wallColor = config.wallColor;
        this.wallOpacity = config.wallOpacity;
        this.wallTransparent = config.wallTransparent;
        this.length = elevatorManagerSettings.defaultElevator.length;
        this.width = elevatorManagerSettings.defaultElevator.width;
        this.height = elevatorManagerSettings.defaultElevator.height;
        this.capacity = config.capacity;
        this.speed = config.speed;
        this.coveredFloors = config.coveredFloors;
        this.currentFloor = config.currentFloor;
        this.wireframes = config.wireframes;
    }

    public getGeometry(): (THREE.LineSegments | THREE.Mesh)[] {
        return this.createGeometry();
    }

    public getFloorPanes(): THREE.Mesh[] {
        const geometry = [];

        for (let i = 0; i < this.coveredFloors; i++) {
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
            floor.translateZ(i * elevatorManagerSettings.defaultElevator.floorHeight);
            floor.translateY(-(elevatorManagerSettings.defaultElevator.floorWidth + this.width) / 2);
            floor.name = 'floorPane';
            geometry.push(floor);
        }

        return geometry;
    }

    private createGeometry(): (THREE.LineSegments | THREE.Mesh)[] {
        const geometry = [];
        const floor = this.createPane('floor', false);
        const ceiling = this.createPane('ceiling', false);
        const wallLeft = this.createPane('wall');
        const wallRight = this.createPane('wall');
        const wallBack = this.createPane('wall');

        floor.rotateX(angle90);
        ceiling.rotateX(angle90);
        ceiling.translateZ(-this.height);
        wallLeft.translateZ(-this.length / 2);
        wallRight.translateZ(this.length / 2);
        wallBack.rotateY(-angle90);
        wallBack.translateZ(-this.length / 2);

        // TODO: draw the doors
        geometry.push(floor, ceiling, wallLeft, wallRight, wallBack);

        if (this.wireframes.isWireframesShowed) geometry.push(...geometry.map(element => this.createWireframe(element)));

        return geometry;
    }

    private createPane(name: string, isWall: boolean = true): THREE.Mesh {
        const geometry = isWall ? new THREE.PlaneGeometry(this.length, this.height) : new THREE.PlaneGeometry(this.length, this.width);
        const material = new THREE.MeshBasicMaterial({
            color: this.wallColor,
            side: THREE.DoubleSide,
            opacity: this.wallOpacity,
            transparent: this.wallTransparent
        });
        const pane = new THREE.Mesh(geometry, material);

        if (isWall) {
            pane.translateY(this.height / 2);
            pane.rotateY(angle90);
        }
        pane.name = name;

        return pane;
    }

    private createWireframe(object: THREE.Mesh, name: string = 'wireframe'): THREE.LineSegments {
        const edges = new THREE.EdgesGeometry(object.geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: this.wireframes.color }));

        ['x', 'y', 'z'].forEach(axis => {
            line.position[axis] = object.position[axis];
            line.rotation[axis] = object.rotation[axis];
        });
        line.name = name;

        return line;
    }
}
