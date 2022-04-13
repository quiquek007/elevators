const elevatorManagerSettings = {
    key: 'elevatorManagerSettings',
    elevators: [],
    selectedElevator: null,
    distanceBetweenElevators: 25,

    defaultElevator: {
        wallColor: '#75c6c6',
        wallOpacity: 1,
        wallTransparent: false,
        length: 10,
        width: 10,
        height: 15,
        capacity: 10,
        speed: 10,
        coveredFloors: 2,
        currentFloor: 0,
        floorHeight: 25,
        floorColor: 'gray',
        floorOpacity: 0.8,
        floorLength: 20,
        floorWidth: 20
    },

    wireframes: {
        wireframesSettingsExpanded: false,
        isWireframesShowed: true,
        color: '#fff'
    }
};

export default elevatorManagerSettings;
