import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { EngineService } from './engine.service';
import Building from '../shared/classes/building.class';
import { DefaultElevator } from '../shared/default-elevator.model';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/root-interface';
import buildingSettingsActions from '../redux/building-settings/building-settings.actions';
import Elevator from '../shared/classes/elevator.class';

@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public building = new Building();;
    public defaultColor = new THREE.Color('rgb(0, 0, 255)');

    constructor(private engine: EngineService,
        private store: Store<AppState>) {}

    public createCube(
        geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1)
        ): THREE.Mesh {
            const cube: any = new THREE.Mesh(geometry);
            cube.material.color.set(this.defaultColor); 
            console.log('cube', cube);
            cube.material.opacity = 0.3;
            this.engine.addToScene(cube);
            return cube;
    }

    public createGrid(
        size: number,
        division: number,
        centerLineColor: any = new THREE.Color(0x000000),
        otherLineColor: any = new THREE.Color(0x000000)
        ): THREE.GridHelper {
            const grid = new THREE.GridHelper(size, division, centerLineColor, otherLineColor) as any;
            grid.material.transparent = false;
            return grid;
    }

    public createElevator(elevatorConfiguration?: DefaultElevator): Elevator {
        return this.building.createElevator(elevatorConfiguration);
    }
    
    public addToScene(object: any): void {
        this.engine.addToScene(object);
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