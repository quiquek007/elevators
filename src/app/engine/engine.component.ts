import {
    Component,
    ElementRef,
    ViewChild,
    OnInit,
    OnDestroy
} from '@angular/core';
import { EngineService } from '../services/engine.service';
import { Store } from '@ngrx/store';
import { Subscription, combineLatest } from 'rxjs';
import * as THREE from 'three';
import { AppState } from '../redux/root-interface';
import { ObjectManagerService } from '../services/object-manager.service';
import GridUpdateSettings from './engine.interfaces';
import { GridSizeModel } from '../shared/grid-size.model';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.less']
})
export class EngineComponent implements OnInit, OnDestroy {
    private subscribtions: Subscription[] = [];
    private grid: THREE.GridHelper = null;
    private rendererAlpha: boolean;
    private rendererAntialias: boolean;

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
            throw new Error('rendererCanvas not implemented.');
        }

        this.initPrerenderSettings();

        const rendererSettings = {
            canvas: this.rendererCanvas.nativeElement,
            alpha: this.rendererAlpha, // transparent background
            antialias: this.rendererAntialias, // smooth edges
        };
        this.engServ.createScene(rendererSettings, this.canvasContainer);
        this.engServ.animate();

        this.objectManager.createCube();

        this.initSubscribtions();
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    private initPrerenderSettings(): void {
        this.subscribtions.push(
            this.store.select(state => state.background.renderer.rendererAlpha)
                .subscribe(alpha => this.rendererAlpha = alpha),
            this.store.select(state => state.background.renderer.rendererAntialias)
                .subscribe(antialias => this.rendererAntialias = antialias),
        );
    }

    private initSubscribtions(): void {
        this.subscribtions.push(
            this.store.select(state => state.background.backgroundColor)
                .subscribe(backgroundColor => this.engServ.setColorBackground(backgroundColor)),
            combineLatest(
                this.store.select(state => state.background.grid.gridColor),
                this.store.select(state => state.background.grid.gridOpacity),
                this.store.select(state => state.background.grid.gridEnable),
                this.store.select(state => state.background.grid.gridSize),
            ).subscribe(([gridColor, gridOpacity, enable, gridSize]) =>
                this.updateGrid({ gridColor, gridOpacity, gridSize }, enable )),
            this.store.select(state => state.background.controls.enableDamping)
                .subscribe(flag => this.engServ.controls.enableDamping = flag),
            this.store.select(state => state.background.controls.dampingFactor)
                .subscribe(dump => this.engServ.controls.dampingFactor = dump),
        );
    }

    /**
     * grid lifecircle:
     * require to create new grid for change color
     */
    private updateGrid({ gridColor, gridOpacity, gridSize }: GridUpdateSettings, enable: boolean = true): void{
        if (this.grid) this.objectManager.removeObject(this.grid);
        if (!enable) return;

        this.grid = this.objectManager.createGrid(gridSize.size, gridSize.division, gridColor, gridColor);
        (this.grid.material as any).opacity = gridOpacity;
        this.objectManager.addToScene(this.grid);
    }
}
