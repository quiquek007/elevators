export interface DefaultElevator {
    wallColor: THREE.Color | string;
    wallOpacity: number;
    wallTransparent: boolean;
    length: number;
    width: number;
    height: number;
    capacity: number;
    speed: number;
    coveredFloors: number;
    currentFloor: number;
    freeSpace: {
        left: number,
        right: number
    };
    startPosiotion?: THREE.Vector3;
}
