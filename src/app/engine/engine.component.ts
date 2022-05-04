import * as THREE from 'three';
import { filter, take } from 'rxjs/operators';
import { Subscription, combineLatest, fromEvent } from 'rxjs';
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
import { FontProviderService } from 'app/services/font-provider.service';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.less']
})
export class EngineComponent implements OnInit, OnDestroy {
    private subscribtions: Subscription[] = [];
    private grid: THREE.GridHelper = null;
    private rendererAlpha: boolean;
    private selectedElevator: Elevator;
    private allElevators: Elevator[];
    private rendererAntialias: boolean;
    private cameraSettings: CameraSettings = { ...cameraSettings };

    @ViewChild('rendererCanvas', { static: true })
    public rendererCanvas: ElementRef<HTMLCanvasElement>;

    @ViewChild('canvasContainer', { static: true })
    public canvasContainer: ElementRef<HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService,
        private store: Store<AppState>,
        private fontProvider: FontProviderService
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

        this.subscribeOnMouseClick();

        // helpers
        // this.objectManager.addToScene(this.objectManager.createCube());
        // var axesHelper = new THREE.AxesHelper(50);
        // this.objectManager.addToScene(axesHelper);

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
            this.store.select(state => state.elevatorManagerSettings.selectedElevator).subscribe(elevator => this.selectedElevator = elevator),
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators),
            // require loaded font before using
            combineLatest([
                this.store.select(state => state.elevatorManagerSettings.elevators).pipe(take(1)),
                this.fontProvider.isLoaded.pipe(filter(value => value))
            ]).subscribe(([elevators]) => this.reInitiateElevators(elevators))
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
        const elevatorList: Elevator[] = [];

        elevators.forEach((elevator, idx) => {
            const config = this.objectManager.createElevatorConfiguration(elevator);
            const elevatorObject = this.objectManager.buildElevatorObject(config, idx);

            config.id = elevatorObject.id;
            elevatorList.push(config);

            if (this.selectedElevator?.id === elevator.id) {
                this.objectManager.highlightSelectedElevator(config.id);
                this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(config));
            }
        });

        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(elevatorList));
    }

    private subscribeOnMouseClick(): void {
        let startPointX: number = 0;
        let startPointY: number = 0;

        fromEvent(this.rendererCanvas.nativeElement, 'mousedown')
            .pipe(filter((event: MouseEvent) => event.button === 0))
            .subscribe((event: MouseEvent) => {
                event.preventDefault();
                startPointX = event.x;
                startPointY = event.y;
            });

        fromEvent(this.rendererCanvas.nativeElement, 'mouseup')
            .pipe(filter((event: MouseEvent) => event.button === 0))
            .subscribe((event: MouseEvent) => {
                event.preventDefault();
                // if it's not a click
                if (!this.isClick(startPointX, event.x) || !this.isClick(startPointY, event.y)) return;

                const mouse3D = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
                const raycaster = new THREE.Raycaster();
                raycaster.setFromCamera(mouse3D, this.engServ.camera);
                const intersects = raycaster.intersectObjects(this.engServ.scene.children, true);
                const selectedObject = intersects.find(obj => obj.object.parent.userData.isElevator);

                // if selected is not an elevator
                if (!selectedObject) {
                    if (this.selectedElevator) {
                        this.objectManager.deHighlightSelectedElevator(this.selectedElevator.id);
                        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(null));
                    }
                    return;
                }

                const selectedElevator = selectedObject.object.parent;

                // if selected is the same elevator
                if (this.selectedElevator?.id === selectedElevator.id) return;
                if (this.selectedElevator) this.objectManager.deHighlightSelectedElevator(this.selectedElevator.id);

                const elevator = this.allElevators.find(item => item.id === selectedElevator.id);

                this.objectManager.highlightSelectedElevator(elevator.id);
                this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(elevator));
            });
    }

    // check on click: true or shift: false
    private isClick(startPoint: number, endPoint: number, threshold: number = 2): boolean {
        return Math.abs(startPoint - endPoint) <= threshold;
    }
}
