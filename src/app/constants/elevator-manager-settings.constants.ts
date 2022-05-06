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
        speed: 0.2,
        coveredFloors: 2,
        currentFloor: 0,
        floorHeight: 25,
        floorColor: 'gray',
        floorColorArrived: 'lightgreen',
        floorTextArrived: 'black',
        floorText: 'white',
        floorOpacity: 0.8,
        floorLength: 25,
        floorWidth: 25
    },

    animationTime: {
        doorOpenClose: 1,
        startEndSmooth: 0.25,
        linear: 0.5
    },

    wireframes: {
        wireframesSettingsExpanded: false,
        isWireframesShowed: true,
        color: '#fff'
    }
};

export default elevatorManagerSettings;
