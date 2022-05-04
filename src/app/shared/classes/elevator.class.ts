import * as THREE from 'three';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';
import { IElevator } from '../Elevator/elevator.model';
import { IWireframes } from '../Elevator/childs/wireframes.model';
import { ISize } from '../Elevator/childs/size.model';
import { IEsteticWall } from '../Elevator/childs/estetic-wall.model';
import { ITechProps } from '../Elevator/childs/tech-props.model';
import Floor from './floor.class';

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
    public supportedFloors: Floor[];
    public isSmart: boolean = false;

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
        this.supportedFloors = config.supportedFloors || (Array.from({ length: config.coveredFloors }).fill(new Floor()) as Floor[]);
        this.isSmart = config.isSmart;
    }
}
