import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { EngineService } from './engine.service';
import Building from '../shared/classes/building.class';
import { IElevator } from '../shared/Elevator/elevator.model';
import Elevator from '../shared/classes/elevator.class';
import { IWireframes } from 'app/shared/Elevator/childs/wireframes.model';

@Injectable({ providedIn: 'root' })
export class ObjectManagerService {
    public building = new Building();
    public defaultColor = new THREE.Color('rgb(0, 0, 255)');

    constructor(private engine: EngineService) {}

    public createCube(geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1)): THREE.Mesh {
        const cube: any = new THREE.Mesh(geometry);
        cube.material.color.set(this.defaultColor);
        console.log('cube', cube);
        cube.material.opacity = 0.3;

        return cube;
    }

    public createGrid(
        size: number,
        division: number,
        centerLineColor: any = new THREE.Color(0x000000),
        otherLineColor: any = new THREE.Color(0x000000)
    ): THREE.GridHelper {
        const grid: any = new THREE.GridHelper(size, division, centerLineColor, otherLineColor);
        grid.material.transparent = false;
        return grid;
    }

    public createElevatorConfiguration(elevatorConfig: IElevator): Elevator {
        return this.building.createElevator(elevatorConfig);
    }

    public buildElevator(elevator: Elevator): THREE.Object3D {
        const object = new THREE.Object3D();

        elevator.id = object.id;
        object.name = 'elevator';
        object.add(...elevator.getGeometry());

        return object;
    }

    public addToScene(object: any): void {
        this.engine.addToScene(object);
    }

    public removeObject(object: any): void {
        this.engine.removeFromScene(object);
        return;
    }

    public hasObjectInScene(): boolean {
        // TODO: implement it
        return;
    }

    public getObjectById(id: number): THREE.Object3D {
        return this.engine.getObjectById(id);
    }

    public getIdByObject(): object {
        // TODO: implement it
        return;
    }

    public getNewId(): number {
        // TODO: implement it
        return;
    }
}
