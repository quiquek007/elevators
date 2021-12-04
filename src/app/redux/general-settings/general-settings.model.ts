import { Controls } from 'app/shared/controls.model';
import { Grid } from 'app/shared/grid.model';
import { Renderer } from 'app/shared/renderer.model';

export interface GeneralSettings {
    backgroundColor: string;
    grid: Grid;
    renderer: Renderer;
    controls: Controls;
}