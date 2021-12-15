import { GridSizeModel } from './grid-size.model';

export interface Grid {
    gridColor: string;
    gridEnable: boolean;
    gridOpacity: number;
    gridSize: GridSizeModel;
    gridSettingsExpanded?: boolean;
}