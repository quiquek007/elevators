import { generalSettingsReducer } from './general-settings/general-settings.reducer';
import { settingsPanelReducer } from './settings-panel/settings-panel.reducer';
import { elevatorManagerReducer } from './elevator-manager-settings/elevator-manager-settings.reducer';
import { cameraSettingsReducer } from './camera-settings/camera-settings.reducer';

export const rootReducer = {
    generalSettings: generalSettingsReducer,
    settingsPanel: settingsPanelReducer,
    elevatorManagerSettings: elevatorManagerReducer,
    cameraSettings: cameraSettingsReducer,
};