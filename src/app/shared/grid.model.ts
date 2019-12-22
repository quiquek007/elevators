import { GridSizeModel } from './grid-size.model';

export interface Grid {
    gridColor: string;
    gridEnable: boolean;
    gridSettingsExpanded: boolean;
    gridOpacity: number;
    gridSize: GridSizeModel;
}