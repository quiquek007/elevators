import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnInit,
    OnDestroy
} from '@angular/core';
import { EngineService } from '../services/engine.service';
import { ObjectManagerService } from '../services/object-manager.service';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/root-interface';
import { Subscription } from 'rxjs';
import * as THREE from 'three';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.less']
})
export class EngineComponent implements OnInit, OnDestroy {
    private subscribtions: Subscription[] = [];
    private grid: THREE.GridHelper = null;

    @ViewChild('rendererCanvas', {static: true})
    public rendererCanvas: ElementRef <HTMLCanvasElement>;

    @ViewChild('canvasContainer', {static: true})
    public canvasContainer: ElementRef <HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService,
        private store: Store<AppState>) {}

    public ngOnInit(): void {
        if (!this.rendererCanvas) {
            throw new Error("rendererCanvas not implemented.");
        }

        this.engServ.createScene(this.rendererCanvas, this.canvasContainer);
        this.engServ.animate();

        this.objectManager.createCube();

        this.initSubscribtions();
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    private initSubscribtions(): void {
        this.subscribtions.push(
            this.store.select(state => state.background.backgroundColor)
                .subscribe(backgroundColor => this.engServ.setColorBackground(backgroundColor)),
            this.store.select(state => state.background.gridColor)
                .subscribe(gridColor => this.updateGrid(gridColor)),
        );
    }

    /**
     * grid lifecyrcle:
     * require to create new grid for change color
     * @param color - string || THREE.Color
     */
    private updateGrid(color: string): void{
        if (this.grid) {
            this.objectManager.removeObject(this.grid);
        }
        
        this.grid = this.objectManager.createGrid(color, color);
        this.objectManager.addToScene(this.grid);
    }
}
