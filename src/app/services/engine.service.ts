import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import { fromEvent } from 'rxjs';
import { debounceTime, skip } from 'rxjs/operators';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import { CameraSettings } from 'app/redux/camera-settings/camera-settings.model';
import CameraSettingsActions from '../redux/camera-settings/camera-settings.actions';

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
    private renderer: THREE.WebGLRenderer;
    private light: THREE.AmbientLight;
    private container: HTMLElement;
    private frameId: number = null;
    private clock = new THREE.Clock();

    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public controls: OrbitControls;
    public mixers: THREE.AnimationMixer[] = [];

    constructor(private ngZone: NgZone, private store: Store<AppState>) {}

    public ngOnDestroy(): void {
        if (this.frameId != null) cancelAnimationFrame(this.frameId);
    }

    public createScene(settings: THREE.WebGLRendererParameters, container: ElementRef<HTMLDivElement>, cameraSettings: CameraSettings): void {
        // The first step is to get the reference of the canvas element from our HTML document
        this.renderer = new THREE.WebGLRenderer(settings);
        this.renderer.setSize(container.nativeElement.clientWidth, container.nativeElement.clientHeight);
        this.container = container.nativeElement;
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);

        // soft white light
        this.light = new THREE.AmbientLight(0x404040);
        this.light.position.z = 10;

        // mouse control
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.screenSpacePanning = false;
        // this.controls.maxPolarAngle = Math.PI / 2;

        this.scene.add(this.light);
        this.scene.add(this.camera);

        this.setInitialCameraPosition(cameraSettings);
        this.subscribeOnCameraMovement();
    }

    public animate(): void {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            document.readyState !== 'loading' ? this.render() : window.addEventListener('DOMContentLoaded', () => this.render());
            window.addEventListener('resize', () => this.resize());
        });
    }

    public render(): void {
        this.frameId = requestAnimationFrame(() => this.render());
        // animation
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;

        if (this.mixers[0]) {
            const delta = this.clock.getDelta();

            this.mixers.forEach(mixer => mixer.update(delta));
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    public resize(): void {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

    public setColorBackground(color: string): void {
        this.scene.background = new THREE.Color(color);
    }

    public addToScene(obj: any): void {
        this.scene.add(obj);
    }

    public removeFromScene(obj: any): void {
        this.scene.remove(obj);
    }

    public getObjectById(id: number): THREE.Object3D {
        return this.scene.getObjectById(id);
    }

    public getObjectByName(name: string): THREE.Object3D {
        return this.scene.getObjectByName(name);
    }

    public setInitialCameraPosition(cameraSettings: CameraSettings): void {
        if (!cameraSettings) return;

        ['x', 'y', 'z'].forEach(axis => {
            this.camera.position[axis] = cameraSettings.cameraPosition[axis];
            this.controls.target[axis] = cameraSettings.controlsTarget[axis];
        });
    }

    private subscribeOnCameraMovement(): void {
        fromEvent(this.controls, 'change')
            .pipe(skip(1), debounceTime(250))
            .subscribe(() => {
                const { position } = this.camera;
                const { target } = this.controls;

                this.store.dispatch(new CameraSettingsActions.SetCameraPostion({ x: position.x, y: position.y, z: position.z }));
                this.store.dispatch(new CameraSettingsActions.SetControlsTarget({ x: target.x, y: target.y, z: target.z }));
            });
    }
}
