import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';

@Injectable({ providedIn: 'root' })
export class ElevatorAnimationManagerService {
    constructor(private engineService: EngineService) {}

    public start(object3d: THREE.Object3D): void {
        // TODO: at first add passangers
        // let passangers = 2;
        // while(passangers--) {
        // }
        // let r, k;
        // r = this.moveStartSmooth(this.elevatorObject, 0, 25);
        // r.addEventListener('finished', e => {
        //     console.log('123');
        //     k = this.moveLinear(this.elevatorObject, 25, 50);
        // });
    }

    public moveStartSmooth(object3d: THREE.Object3D, startPoint: number, endPoint: number): THREE.AnimationMixer {
        const { startEndSmooth } = elevatorManagerSettings.animationTime;
        // name, time keyframes, position keyframe
        const positionKF = new THREE.VectorKeyframeTrack('.position', [0, startEndSmooth], [25, startPoint, 0, 25, endPoint, 0]);
        const clip = new THREE.AnimationClip('moveStartSmooth', startEndSmooth, [positionKF]);
        const mixer = new THREE.AnimationMixer(object3d);
        const clipAction = mixer.clipAction(clip);

        clipAction.loop = THREE.LoopOnce;
        clipAction.clampWhenFinished = true;
        clipAction.play();
        this.engineService.mixers.push(mixer);

        return mixer;
    }

    public moveLinear(object3d: THREE.Object3D, startPoint: number, endPoint: number): THREE.AnimationMixer {
        const { linear } = elevatorManagerSettings.animationTime;
        const positionKF = new THREE.VectorKeyframeTrack('.position', [0, linear], [25, startPoint, 0, 25, endPoint, 0]);
        const clip = new THREE.AnimationClip('moveLinear', linear, [positionKF]);
        const mixer = new THREE.AnimationMixer(object3d);
        const clipAction = mixer.clipAction(clip);

        clipAction.loop = THREE.LoopOnce;
        clipAction.clampWhenFinished = true;
        clipAction.play();
        this.engineService.mixers.push(mixer);

        return mixer;
    }

    public moveEndSmooth(object3d: THREE.Object3D, startPoint: number, endPoint: number): THREE.AnimationMixer {
        const { startEndSmooth } = elevatorManagerSettings.animationTime;
        const positionKF = new THREE.VectorKeyframeTrack('.position', [0, startEndSmooth], [25, startPoint, 0, 25, endPoint, 0]);
        const clip = new THREE.AnimationClip('moveEndSmooth', startEndSmooth, [positionKF]);
        const mixer = new THREE.AnimationMixer(object3d);
        const clipAction = mixer.clipAction(clip);

        clipAction.loop = THREE.LoopOnce;
        clipAction.clampWhenFinished = true;
        clipAction.play();
        this.engineService.mixers.push(mixer);

        return mixer;
    }

    /* example:
        this.openCloseDoor(object3d.getObjectByName('door-left'), true);
        this.openCloseDoor(object3d.getObjectByName('door-right'), false);
        setTimeout(() => {
            this.openCloseDoor(object3d.getObjectByName('door-left'), true, true);
            this.openCloseDoor(object3d.getObjectByName('door-right'), false, true);
        }, 2500);
    */
    public openCloseDoor(door: THREE.Object3D, isDoorleft: boolean, close: boolean = false): void {
        let distance = isDoorleft ? elevatorManagerSettings.defaultElevator.length : elevatorManagerSettings.defaultElevator.length / 2;
        const { doorOpenClose } = elevatorManagerSettings.animationTime;
        if (close) distance *= -1;
        const positionKF = new THREE.VectorKeyframeTrack(
            '.position',
            [0, doorOpenClose],
            [door.position.x, door.position.y, door.position.z, door.position.x - distance, door.position.y, door.position.z]
        );
        const clip = new THREE.AnimationClip('moveEndSmooth', doorOpenClose, [positionKF]);
        const mixer = new THREE.AnimationMixer(door);
        const clipAction = mixer.clipAction(clip);

        clipAction.loop = THREE.LoopOnce;
        clipAction.clampWhenFinished = true;
        clipAction.play();
        this.engineService.mixers.push(mixer);
    }

    private calculateDiff(): THREE.QuadraticBezierCurve {
        const {
            animationTime: { startEndSmooth, linear },
            defaultElevator: { floorHeight }
        } = elevatorManagerSettings;

        return new THREE.QuadraticBezierCurve(
            new THREE.Vector2(0, 0),
            new THREE.Vector2(12, startEndSmooth * 0.6),
            new THREE.Vector2(25, startEndSmooth)
        );
    }
}
