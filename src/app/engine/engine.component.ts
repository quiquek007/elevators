import * as THREE from 'three';
import { take } from 'rxjs/operators';
import { Subscription, combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../redux/root-interface';
import GridUpdateSettings from './engine.interfaces';
import Elevator from '../shared/classes/elevator.class';
import { EngineService } from '../services/engine.service';
import cameraSettings from 'app/constants/camera-settings.constants';
import { ObjectManagerService } from '../services/object-manager.service';
import { CameraSettings } from 'app/redux/camera-settings/camera-settings.model';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';

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
    private cameraSettings: CameraSettings = { ...cameraSettings };

    @ViewChild('rendererCanvas', { static: true })
    public rendererCanvas: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvasContainer', { static: true })
    public canvasContainer: ElementRef<HTMLDivElement>;

    constructor(private engServ: EngineService, private objectManager: ObjectManagerService, private store: Store<AppState>) {}

    public ngOnInit(): void {
        if (!this.rendererCanvas) throw new Error('rendererCanvas is not implemented!');

        this.initPrerenderSettings();

        const rendererSettings = {
            canvas: this.rendererCanvas.nativeElement,
            alpha: this.rendererAlpha, // transparent background
            antialias: this.rendererAntialias // smooth edges
        };

        this.engServ.createScene(rendererSettings, this.canvasContainer, this.cameraSettings);
        this.engServ.animate();

        this.objectManager.addToScene(this.objectManager.createCube());
        var axesHelper = new THREE.AxesHelper(50);
        this.objectManager.addToScene(axesHelper);

        this.initSubscribtions();
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    private initPrerenderSettings(): void {
        this.subscribtions.push(
            this.store.select(state => state.generalSettings.renderer.rendererAlpha).subscribe(alpha => this.rendererAlpha = alpha),
            this.store.select(state => state.generalSettings.renderer.rendererAntialias).subscribe(antialias => this.rendererAntialias = antialias),
            this.store
                .select(state => state.cameraSettings.cameraPosition)
                .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition),
            this.store
                .select(state => state.cameraSettings.controlsTarget)
                .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget)
        );
    }

    private initSubscribtions(): void {
        this.subscribtions.push(
            this.store
                .select(state => state.generalSettings.backgroundColor)
                .subscribe(backgroundColor => this.engServ.setColorBackground(backgroundColor)),
            combineLatest([
                this.store.select(state => state.generalSettings.grid.gridColor),
                this.store.select(state => state.generalSettings.grid.gridOpacity),
                this.store.select(state => state.generalSettings.grid.gridEnable),
                this.store.select(state => state.generalSettings.grid.gridSize)
            ]).subscribe(([gridColor, gridOpacity, enable, gridSize]) => this.updateGrid({ gridColor, gridOpacity, gridSize }, enable)),
            this.store.select(state => state.generalSettings.controls.enableDamping).subscribe(flag => this.engServ.controls.enableDamping = flag),
            this.store.select(state => state.generalSettings.controls.dampingFactor).subscribe(dump => this.engServ.controls.dampingFactor = dump),
            this.store
                .select(state => state.generalSettings.controls.cameraMinDistance)
                .subscribe(distance => this.engServ.controls.minDistance = distance),
            this.store
                .select(state => state.generalSettings.controls.cameraMaxDistance)
                .subscribe(distance => this.engServ.controls.maxDistance = distance),
            this.store
                .select(state => state.elevatorManagerSettings.elevators)
                .pipe(take(1))
                .subscribe(elevators => this.reInitiateElevators(elevators))
        );
    }

    /**
     * grid lifecircle:
     * require to create new grid for changing color
     */
    private updateGrid({ gridColor, gridOpacity, gridSize }: GridUpdateSettings, enable: boolean = true): void {
        if (this.grid) this.objectManager.removeObject(this.grid);
        if (!enable) return;

        this.grid = this.objectManager.createGrid(gridSize.size, gridSize.division, gridColor, gridColor);
        (this.grid.material as any).opacity = gridOpacity;
        this.objectManager.addToScene(this.grid);
    }

    private reInitiateElevators(elevators: Elevator[]): void {
        elevators.forEach(elevator => {
            const config = this.objectManager.createElevatorConfiguration(elevator);
            this.objectManager.addToScene(this.objectManager.buildElevatorObject(config));
        });

        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(elevators));
    }
}
