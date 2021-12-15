import Elevator from 'app/shared/classes/elevator.class';
import { Wireframes } from 'app/shared/wireframes.model';

export interface ElevatorManagerSettings {
    elevators: Elevator[];
    selectedElevator: Elevator,
    distanceBetweenElevators: number,
    defaultElevator: Elevator,
    wireframes: Wireframes,
}