import { GridSizeModel } from '../shared/grid-size.model';

export default interface GridUpdateSettings {
    gridColor: THREE.Color;
    gridOpacity: number;
    gridSize: GridSizeModel;
}
