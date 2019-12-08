import { backgroundReducer } from './background/background.reducer';
import { settingsFormReducer } from './settings-form/settings-form.reducer';

export const rootReducer = {
    background: backgroundReducer,
    settingsForm: settingsFormReducer
};