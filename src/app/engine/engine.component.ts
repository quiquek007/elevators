import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import { EngineService } from '../services/engine.service';
import { ObjectManagerService } from '../services/object-manager.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html'
})
export class EngineComponent implements OnInit {

    @ViewChild('rendererCanvas', {static: true})
    public rendererCanvas: ElementRef <HTMLCanvasElement>;

    @ViewChild('canvasContainer', {static: true})
    public canvasContainer: ElementRef <HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService) {}

    public ngOnInit(): void {
        this.engServ.createScene(this.rendererCanvas, this.canvasContainer);
        this.engServ.animate();
        this.objectManager.createCube();
        this.objectManager.createGrid();
    }
}
