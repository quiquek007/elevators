const generalSettings = {
    key: 'generalSettings',
    backgroundColor: 'rgb(64, 64, 64)',

    grid: {
        gridColor: 'gray',
        gridEnable: true,
        gridSettingsExpanded: false,
        gridOpacity: 0.2,
        gridSize: {
            size: 200,
            division: 40
        },
    },

    renderer: {
        rendererSettingsExpanded: false,
        rendererAlpha: true,
        rendererAntialias: true,
    },

    controls: {
        controlsSettingsExpanded: false,
        enableDamping: true,
        dampingFactor: 0.15,
        cameraMinDistance: 100,
        cameraMaxDistance: 1000,
    }
}

export default generalSettings;