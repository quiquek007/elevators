import { GeneralSettings } from './general-settings/general-settings.model';
import { SettingsForm } from './settings-form/settings-form.model';
import { BuildingSettings } from './building-settings/building-settings.model';

export interface AppState {
    generalSettings: GeneralSettings;
    settingsForm: SettingsForm;
    buildingSettings: BuildingSettings;
}