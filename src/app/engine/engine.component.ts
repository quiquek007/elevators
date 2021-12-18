import { Subscription, combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as THREE from 'three';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { EngineService } from '../services/engine.service';
import { AppState } from '../redux/root-interface';
import { ObjectManagerService } from '../services/object-manager.service';
import GridUpdateSettings from './engine.interfaces';
import { IElevator } from '../shared/Elevator/elevator.model';
import Elevator from '../shared/classes/elevator.class';
import elevatorManagerSettingsActions from '../redux/elevator-manager-settings/elevator-manager-settings.actions';
import { CameraSettings } from 'app/redux/camera-settings/camera-settings.model';
import cameraSettings from 'app/constants/camera-settings.constants';

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
    private allElevators: Elevator[] = [];
    private cameraSettings: CameraSettings = { ...cameraSettings };
    private distanceBetweenElevators: number;

    @ViewChild('rendererCanvas', { static: true })
    public rendererCanvas: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvasContainer', { static: true })
    public canvasContainer: ElementRef<HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService,
        private store: Store<AppState>
    ) {}

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
            this.store
                .select(state => state.generalSettings.renderer.rendererAlpha)
                .subscribe(alpha => this.rendererAlpha = alpha),
            this.store
                .select(state => state.generalSettings.renderer.rendererAntialias)
                .subscribe(antialias => this.rendererAntialias = antialias),
            this.store
                .select(state => state.elevatorManagerSettings.elevators)
                .subscribe(elevators => this.allElevators = [...elevators]),
            this.store
                .select(state => state.elevatorManagerSettings.distanceBetweenElevators)
                .subscribe(distance => this.distanceBetweenElevators = distance),
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
            ]).subscribe(([gridColor, gridOpacity, enable, gridSize]) =>
                this.updateGrid({ gridColor, gridOpacity, gridSize }, enable)
            ),
            this.store
                .select(state => state.generalSettings.controls.enableDamping)
                .subscribe(flag => this.engServ.controls.enableDamping = flag),
            this.store
                .select(state => state.generalSettings.controls.dampingFactor)
                .subscribe(dump => this.engServ.controls.dampingFactor = dump),
            this.store
                .select(state => state.generalSettings.controls.cameraMinDistance)
                .subscribe(distance => this.engServ.controls.minDistance = distance),
            this.store
                .select(state => state.generalSettings.controls.cameraMaxDistance)
                .subscribe(distance => this.engServ.controls.maxDistance = distance)
            // this.store.select(state => state.elevatorManagerSettings.createNewElevator)
            //     .pipe(filter(newElevator => newElevator !== null))
            //     .subscribe(config => this.createNewElevator(config)),
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

    private createNewElevator(config: IElevator): void {
        // const elevator = this.objectManager.createElevatorConfiguration(config);
        // console.log('elevator', elevator);
        // this.allElevators.push(elevator);
        // return;
        // this.store.dispatch(new elevatorManagerSettingsActions.SetElevators(this.allElevators));
        // elevator.createGeometry();
        // elevator.geometry.forEach(element => this.objectManager.addToScene(element));
    }
}
