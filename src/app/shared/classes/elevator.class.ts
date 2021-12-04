import buildingSettings from 'app/constants/building-settings.constants';
import { DefaultElevator } from '../default-elevator.model';
import * as THREE from 'three';

const angle90: number = 1.5707963267948966;

// function rotateObject(object, degreeX=0, degreeY=0, degreeZ=0) {
//     object.rotateX(THREE.Math.degToRad(degreeX));
//     object.rotateY(THREE.Math.degToRad(degreeY));
//     object.rotateZ(THREE.Math.degToRad(degreeZ));
//  }

export default class Elevator implements DefaultElevator{
    public wallColor: THREE.Color | string;
    public wallOpacity: number;
    public wallTransparent: boolean;
    public length: number;
    public width: number;
    public height: number;
    public capacity: number;
    public speed: number;
    // rename to covered range
    // shows how many floor can elevator cover
    public coveredFloors: number;
    public currentFloor: number;
    public startPosition: THREE.Vector3;
    public freeSpace: { left: number, right: number };
    public geometry: any = [];

    constructor(config: DefaultElevator = buildingSettings.defaultElevator) {
        this.wallColor = config.wallColor;
        this.wallOpacity = config.wallOpacity;
        this.wallTransparent = config.wallTransparent;
        this.length = config.length;
        this.width = config.width;
        this.height = config.height;
        this.capacity = config.capacity;
        this.speed = config.speed;
        // what is this?
        this.coveredFloors = config.coveredFloors;
        this.currentFloor = config.currentFloor;
    }

    public createGeometry(): void {
        const floor = this.createPane('floor');
        floor.rotateX(angle90);
        const ceiling = this.createPane('ceiling');
        ceiling.rotateX(angle90);
        ceiling.translateZ(-this.height);
        ceiling.position.z = this.currentFloor * this.height;
        this.geometry.push(floor, ceiling);
    }

    private createPane(name: string): THREE.Mesh {
        const geometry = new THREE.PlaneGeometry(this.length, this.width);
        const material = new THREE.MeshBasicMaterial({color: this.wallColor, side: THREE.DoubleSide});
        const plane = new THREE.Mesh(geometry, material);
        plane.position.x = this.startPosition.x;
        plane.name = name;
        return plane;
    }
}