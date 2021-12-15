export interface IElevator {
    wallColor: THREE.Color | string;
    wallOpacity: number;
    wallTransparent: boolean;
    capacity: number;
    speed: number;
    coveredFloors: number;
    currentFloor: number;
}
