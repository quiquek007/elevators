import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { EngineService } from './engine.service';

@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public store: any[] = [];
    public defaultColor = new THREE.Color("rgb(0, 0, 255)");

    constructor(private engine: EngineService) {}

    public createCube(
        geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1)
        ): THREE.Mesh {
        const cube: any = new THREE.Mesh(geometry);
        cube.material.color.set(this.defaultColor);    
        this.store.push(cube);
        this.engine.addToScene(cube);
        return cube;
    }

    public createGrid(): THREE.GridHelper {
        const grid = new THREE.GridHelper(200, 40, 0x000000, 0x000000) as any;
        grid.material.opacity = 0.2;
        grid.material.transparent = false;
        this.store.push(grid);
        this.engine.addToScene(grid);
        return grid;
    }

    public removeObject(id: number): boolean {
        return;
    }

    public hasObjectInScene(): boolean {
        return;
    }

    public getObjectId(): number {
        return;
    }

    public addToStore(obj: any): void {
        return;
    }

    public getNewId(): number {
        return;
    }
}