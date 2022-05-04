import Passenger from './passenger.class';

export default class Floor {
    public passengers: Passenger[] = [];

    constructor(passengers: Passenger[] = []) {
        this.passengers = passengers;
    }
}
