import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { EngineService } from './engine.service';

@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public storage: any[] = [];
    public defaultColor = new THREE.Color('rgb(0, 0, 255)');

    constructor(private engine: EngineService) {}

    public createCube(
        geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1)
        ): THREE.Mesh {
        const cube: any = new THREE.Mesh(geometry);
        cube.material.color.set(this.defaultColor);    
        this.storage.push(cube);
        this.engine.addToScene(cube);
        return cube;
    }

    public createGrid(
        centerLineColor: any = new THREE.Color(0x000000),
        otherLineColor: any = new THREE.Color(0x000000)
        ): THREE.GridHelper {
        const grid = new THREE.GridHelper(200, 40, centerLineColor, otherLineColor) as any;
        grid.material.transparent = false;
        return grid;
    }
    
    public addToScene(object: any): void {
        this.engine.addToScene(object);
        return;
    }

    public addToStorerage(obj: any): void {
        return;
    }

    public removeObject(object: any): void {
        this.engine.removeFromScene(object);
        return;
    }

    public hasObjectInScene(): boolean {
        return;
    }

    public getObjectById(): number {
        return;
    }

    public getIdByObject(): object {
        return;
    }

    public getNewId(): number {
        return;
    }
}