export default class Passenger {
    public destinationFloor: number;
    public currentFloor: number;

    constructor(currentFloor: number, destinationFloor: number) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;
    }
}
