import * as THREE from 'three';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import Elevator from 'app/shared/classes/elevator.class';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';
import { ObjectManagerService } from 'app/services/object-manager.service';

@Component({
    selector: 'wireframes-settings',
    templateUrl: './wireframes-settings.component.html',
    styleUrls: ['./wireframes-settings.component.less']
})
export class WireframesSettingsComponent implements OnInit {
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];
    private elevatorObject: THREE.Object3D;

    public wireframesSettingsExpanded: boolean;
    public isWireframesShowed: boolean;
    public wireframesColor: THREE.Color;
    public selectedElevator: Elevator;

    constructor(private store: Store<AppState>, private objectManager: ObjectManagerService) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store
                .select(state => state.elevatorManagerSettings.wireframes.wireframesSettingsExpanded)
                .subscribe(expanded => this.wireframesSettingsExpanded = expanded),
            this.store
                .select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
                .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed),
            this.store.select(state => state.elevatorManagerSettings.wireframes.color).subscribe(color => this.wireframesColor = color),
            this.store
                .select(state => state.elevatorManagerSettings.selectedElevator)
                .subscribe(elevator => {
                    this.selectedElevator = elevator;

                    if (!elevator) return;

                    this.isWireframesShowed = elevator.wireframes.isWireframesShowed;
                    this.wireframesColor = elevator.wireframes.color;
                    this.elevatorObject = this.objectManager.getObjectById(this.selectedElevator.id);
                })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onWireframesSettingsExpanded(event: Event): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesExpand(event[0].expanded));
    }

    public onShowWireframeChange(event: Event): void {
        event.stopPropagation();

        if (!this.selectedElevator) return;
        if (this.isWireframesShowed) {
            console.log('this.elevatorObject.', this.elevatorObject);

            this.elevatorObject.children.push(...this.getWallObjects().map(element => this.createWireframe(element)));
        } else {
            this.getWireframesObjects().forEach((element: THREE.Object3D) => this.elevatorObject.remove(element));
        }

        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesShowed(this.isWireframesShowed));
    }

    public onWireframesColorChange(color: THREE.Color): void {
        if (!this.selectedElevator) return;

        this.getWireframesObjects().forEach((element: THREE.Object3D) => (<any>element).material.color.set(color));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesColor(color));
    }

    private getWireframesObjects(): THREE.Object3D[] {
        return this.elevatorObject.children.filter(element => element.name === 'wireframe');
    }

    private getWallObjects(): THREE.Object3D[] {
        const walls = this.elevatorObject.children.filter(element => element.name === 'wall');

        walls.push(this.elevatorObject.children.find(element => element.name === 'floor'));
        walls.push(this.elevatorObject.children.find(element => element.name === 'ceiling'));

        return walls;
    }

    private createWireframe(object): THREE.LineSegments {
        const edges = new THREE.EdgesGeometry(object.geometry);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: this.wireframesColor }));

        ['x', 'y', 'z'].forEach(axis => {
            line.position[axis] = object.position[axis];
            line.rotation[axis] = object.rotation[axis];
        });
        line.name = 'wireframe';

        return line;
    }
}
