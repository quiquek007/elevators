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
    private allElevators: Elevator[];

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
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators),
            this.store
                .select(state => state.elevatorManagerSettings.selectedElevator)
                .subscribe(elevator => {
                    this.selectedElevator = elevator;

                    if (!elevator) {
                        this.elevatorObject = null;
                        return;
                    }

                    this.isWireframesShowed = elevator.wireframes.isWireframesShowed;
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
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesShowed(this.isWireframesShowed));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('isWireframesShowed', this.isWireframesShowed);
        this.isWireframesShowed
            ? this.getWallObjects().forEach(element => this.objectManager.createWireframe(modifiedElevator, element))
            : this.getWireframesObjects().forEach((element: THREE.Object3D) => element.parent.remove(element));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onWireframesColorChange(color: THREE.Color): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesColor(color));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('color', color);
        this.getWireframesObjects().forEach((element: THREE.Object3D) => (<any>element).material.color.set(color));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    private getWireframesObjects(): THREE.Object3D[] {
        return this.getWallObjects().map(elem => elem.getObjectByName('wireframe'));
    }

    private getWallObjects(): Array<THREE.Mesh | THREE.Object3D> {
        const elevatorSelf = this.elevatorObject.getObjectByName('elevatorSelf');
        const walls = elevatorSelf.children.filter(element => element.name === 'wall');

        walls.push(elevatorSelf.children.find(element => element.name === 'floor'));
        walls.push(elevatorSelf.children.find(element => element.name === 'ceiling'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-right'));
        walls.push(elevatorSelf.children.find(element => element.name === 'door-left'));

        return walls;
    }

    private getModifiedElevators(property: string, value: any): [Elevator, Elevator[]] {
        const modifiedElevator = {
            ...this.selectedElevator,
            wireframes: {
                ...this.selectedElevator.wireframes,
                [property]: value
            }
        } as Elevator;
        const idx = this.allElevators.findIndex(item => modifiedElevator.id === item.id);
        const modifiedAllElevators = [...this.allElevators];
        modifiedAllElevators[idx] = modifiedElevator;

        return [modifiedElevator, modifiedAllElevators];
    }
}
