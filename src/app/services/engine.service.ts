import * as THREE from 'three';
import {
    Injectable,
    ElementRef,
    OnDestroy,
    NgZone
} from '@angular/core';
import * as OrbitControls from 'three-orbitcontrols';

@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
    private canvas: HTMLCanvasElement;
    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private light: THREE.AmbientLight;
    private controls: any;
    private container: HTMLElement;

    private frameId: number = null;

    constructor(private ngZone: NgZone) {}

    public ngOnDestroy(): void {
        if (this.frameId != null) cancelAnimationFrame(this.frameId);
    }

    public createScene(canvas: ElementRef<HTMLCanvasElement>, container: ElementRef<HTMLDivElement>): void {
        // The first step is to get the reference of the canvas element from our HTML document
        this.canvas = canvas.nativeElement;
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true, // transparent background
            antialias: true // smooth edges
        });
        this.renderer.setSize(container.nativeElement.clientWidth, container.nativeElement.clientHeight);
        this.container = container.nativeElement;
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(50, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.x = 2;

        // soft white light
        this.light = new THREE.AmbientLight(0x404040);
        this.light.position.z = 10;

        // mouse control
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        this.controls.dampingFactor = 0.15;
        this.controls.screenSpacePanning = false;
        this.controls.minDistance = 100;
        this.controls.maxDistance = 500;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.enableZoom = true;

        this.scene.add(this.light);
        this.scene.add(this.camera);
    }

    public animate(): void {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
                if (document.readyState !== 'loading') {
                    this.render();
                } else {
                    window.addEventListener('DOMContentLoaded', () => this.render());
                }
                window.addEventListener('resize', () => this.resize());
            }
        );
    }

    public render(): void {
        this.frameId = requestAnimationFrame(() => this.render());
        // animation
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
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
}
