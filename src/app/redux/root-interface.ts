import { Background } from './background/background.model';
import { SettingsForm } from './settings-form/settings-form.model';

export interface AppState {
    background: Background;
    settingsForm: SettingsForm;
}