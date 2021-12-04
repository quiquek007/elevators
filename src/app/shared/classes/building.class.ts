import Elevator from './elevator.class';
import Floor from './floor.class';
import { DefaultElevator } from '../default-elevator.model';
import * as THREE from 'three';

export default class Building {
    private elevators: Elevator[] = [];
    private countOfElevators: number = 0;
    private floors: Floor[] = [];
    private countOfFloor: number = 0;

    constructor() {}

    public createElevator(elevatorConfiguration: DefaultElevator): Elevator {
        const elevator = new Elevator(elevatorConfiguration);
        elevator.startPosition = this.getFreePositionForElevator();
        this.elevators.push(elevator);
        this.countOfElevators += 1;
        return elevator;
    }

    public removeElevator(elevator: Elevator): void {
        // for(let i = 0; i < count; i++) {
        //     const element = new Elevator(elevatorConfiguration);
        //     this.elevators.push(element);
        // }
        this.countOfElevators -= 1;
    }

    public clearElevators(): void {
        this.countOfFloor = 0;
        // ...
    }

    public getFreePositionForElevator(): THREE.Vector3 {
        const newVector = new THREE.Vector3(0, 0, 0); 
        if (this.countOfElevators === 0) return newVector;

        const lastElevator = this.elevators[this.countOfElevators];
        newVector.x = lastElevator.startPosition.x + lastElevator.freeSpace.left;
        return newVector;
    }
}