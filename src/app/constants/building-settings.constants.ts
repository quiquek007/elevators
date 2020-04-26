const buildingSettings = {
    key: 'buildingSettings',
    createNewElevator: null,
    elevators: [],
    selectedElevator: null,
    defaultElevator: {
        wallColor: '#75c6c6',
        wallOpacity: 0.6,
        wallTransparent: false,
        length: 10,
        width: 10,
        height: 10,
        capacity: 10,
        speed: 10,
        coveredFloors: 2,
        currentFloor: 0,
        freeSpace: {
            left: 10,
            right: 10
        }
    },
    distanceBetweenElevators: 20
}

export default buildingSettings;
