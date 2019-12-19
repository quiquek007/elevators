import { GridSizeModel } from 'src/app/shared/grid-size.model';

export interface Background {
    backgroundColor: string;

    gridColor: string;
    gridEnable: boolean;
    gridSettingsExpanded: boolean;
    gridOpacity: number;
    gridSize: GridSizeModel;

    rendererSettingsExpanded: boolean;
    rendererAlpha: boolean;
    rendererAntialias: boolean;
}