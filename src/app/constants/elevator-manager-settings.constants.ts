const elevatorManagerSettings = {
    key: 'elevatorManagerSettings',
    elevators: [],
    selectedElevator: null,
    distanceBetweenElevators: 20,

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
        currentFloor: 0
    },

    wireframes: {
        wireframesSettingsExpanded: false,
        isWireframesShowed: true,
        color: '#fff'
    }
};

export default elevatorManagerSettings;
