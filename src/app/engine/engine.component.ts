import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { EngineService } from '../services/engine.service';
import { ObjectManagerService } from '../services/object-manager.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.less']
})
export class EngineComponent implements AfterViewInit {

    @ViewChild('rendererCanvas', {static: true})
    public rendererCanvas: ElementRef <HTMLCanvasElement>;

    @ViewChild('canvasContainer', {static: true})
    public canvasContainer: ElementRef <HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService) {}

    public ngAfterViewInit(): void {
        if (!this.rendererCanvas) {
            console.warn('Error: rendererCanvas missed!');
            return;
        }

        this.engServ.createScene(this.rendererCanvas, this.canvasContainer);
        this.engServ.animate();
        this.objectManager.createCube();
        this.objectManager.createGrid();
    }
}
