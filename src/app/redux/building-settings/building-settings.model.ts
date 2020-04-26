import Elevator from 'src/app/shared/classes/elevator.class';
import { DefaultElevator } from 'src/app/shared/default-elevator.model';

export interface BuildingSettings {
    elevators: Elevator[];
    createNewElevator: any;
    selectedElevator: any,
    defaultElevator: DefaultElevator,
    distanceBetweenElevators: number
}