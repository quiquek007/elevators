import { Controls } from 'src/app/shared/controls.model';
import { Grid } from 'src/app/shared/grid.model';
import { Renderer } from 'src/app/shared/renderer.model';

export interface Background {
    backgroundColor: string;
    grid: Grid;
    renderer: Renderer;
    controls: Controls;
}