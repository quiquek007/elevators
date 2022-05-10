import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import { ElevatorAnimationManagerService } from 'app/services/elevator-animation-manager.service';
import { ObjectManagerService } from 'app/services/object-manager.service';
import Elevator from 'app/shared/classes/elevator.class';

@Component({
    selector: 'animation-player',
    templateUrl: './animation-player.component.html',
    styleUrls: ['./animation-player.component.less']
})
export class AnimationPlayerComponent implements OnInit, OnDestroy {
    private tooltipPosition: string = 'right';
    private allElevators: Elevator[];
    private subscriptions: Subscription[] = [];

    public isInPause: boolean = true;

    constructor(
        private store: Store<AppState>,
        private objectManager: ObjectManagerService,
        private animationService: ElevatorAnimationManagerService
    ) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators)
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'top' : 'right';
    }

    public onPlay(): void {
        // TODO: continue from here
        // elevators without passengers who is already on its floor
        // const elevatorsWO = this.allElevators.map(elevator => {
        //     const supportedFloors = elevator.supportedFloors.map((floor, index) => {
        //         const passengers = floor.passengers.filter(passenger => passenger.destinationFloor !== index);
        //         return { ...floor, passengers };
        //     });
        //     return { ...elevator, supportedFloors };
        // });

        // const dummyElevators = elevatorsWO.filter(elevator => !elevator.isSmart);
        // const smartElevators = elevatorsWO.filter(elevator => elevator.isSmart);

        this.animationService.start(
            this.objectManager.getObjectById(this.allElevators[0].id).getObjectByName('elevatorSelf'),
            this.allElevators[0].speed
        );
        this.isInPause = false;
    }

    public onPause(): void {
        this.animationService.pause();
        this.isInPause = true;
    }
}
