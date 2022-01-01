import { GridSizeModel } from './grid-size.model';

export interface Grid {
    gridColor: THREE.Color;
    gridEnable: boolean;
    gridOpacity: number;
    gridSize: GridSizeModel;
    gridSettingsExpanded?: boolean;
}
