import {
    Component,
    ElementRef,
    ViewChild,
    AfterViewInit,
    OnInit,
    OnDestroy
} from '@angular/core';
import { EngineService } from '../services/engine.service';
import { ObjectManagerService } from '../services/object-manager.service';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/root-interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.less']
})
export class EngineComponent implements OnInit, OnDestroy {
    private subscribtions: Subscription[] = [];

    @ViewChild('rendererCanvas', {static: true})
    public rendererCanvas: ElementRef <HTMLCanvasElement>;

    @ViewChild('canvasContainer', {static: true})
    public canvasContainer: ElementRef <HTMLDivElement>;

    constructor(
        private engServ: EngineService,
        private objectManager: ObjectManagerService,
        private store: Store<AppState>) {}

    public ngOnInit(): void {
        if (!this.rendererCanvas) {
            throw new Error("rendererCanvas not implemented.");
        }

        this.engServ.createScene(this.rendererCanvas, this.canvasContainer);
        this.engServ.animate();

        this.objectManager.createCube();
        this.objectManager.createGrid();

        this.initSubscribtions();
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    private initSubscribtions(): void {
        this.subscribtions.push(
            this.store.select('background')
                .subscribe(({ backgroundColor }) => this.engServ.setColorBackground(backgroundColor)),
        );
    }
}
