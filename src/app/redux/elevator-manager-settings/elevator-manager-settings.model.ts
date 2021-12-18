import Elevator from 'app/shared/classes/elevator.class';
import { IWireframes } from 'app/shared/Elevator/childs/wireframes.model';

export interface ElevatorManagerSettings {
    elevators: Elevator[];
    selectedElevator: Elevator;
    distanceBetweenElevators: number;
    defaultElevator: Elevator;
    wireframes: IWireframes;
}
