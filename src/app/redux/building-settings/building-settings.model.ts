import Elevator from 'app/shared/classes/elevator.class';
import { DefaultElevator } from 'app/shared/default-elevator.model';

export interface BuildingSettings {
    elevators: Elevator[];
    createNewElevator: any;
    selectedElevator: any,
    defaultElevator: DefaultElevator,
    distanceBetweenElevators: number
}