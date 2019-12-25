import { GeneralSettings } from './general-settings/general-settings.model';
import { SettingsForm } from './settings-form/settings-form.model';

export interface AppState {
    generalSettings: GeneralSettings;
    settingsForm: SettingsForm;
}