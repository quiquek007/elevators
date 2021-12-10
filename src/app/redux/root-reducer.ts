import { generalSettingsReducer } from './general-settings/general-settings.reducer';
import { settingsFormReducer } from './settings-form/settings-form.reducer';
import { buildingSettingsReducer } from './building-settings/building-settings.reducer';
import { cameraSettingsReducer } from './camera-settings/camera-settings.reducer';

export const rootReducer = {
    generalSettings: generalSettingsReducer,
    settingsForm: settingsFormReducer,
    buildingSettings: buildingSettingsReducer,
    cameraSettings: cameraSettingsReducer,
};