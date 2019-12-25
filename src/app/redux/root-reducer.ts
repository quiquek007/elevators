import { generalSettingsReducer } from './general-settings/general-settings.reducer';
import { settingsFormReducer } from './settings-form/settings-form.reducer';

export const rootReducer = {
    generalSettings: generalSettingsReducer,
    settingsForm: settingsFormReducer
};