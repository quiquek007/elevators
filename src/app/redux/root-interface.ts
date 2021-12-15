import { GeneralSettings } from './general-settings/general-settings.model';
import { SettingsPanel } from './settings-panel/settings-panel.model';
import { ElevatorManagerSettings } from './elevator-manager-settings/elevator-manager-settings.model';
import { CameraSettings } from './camera-settings/camera-settings.model';

export interface AppState {
    generalSettings: GeneralSettings;
    settingsPanel: SettingsPanel;
    elevatorManagerSettings: ElevatorManagerSettings;
    cameraSettings: CameraSettings;
}