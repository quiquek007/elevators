import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';

@Injectable({ providedIn: 'root' })
export class ElevatorAnimationManagerService {
    constructor(private engineService: EngineService) {}

    public start(object3d: THREE.Object3D, speed: number): void {
        const promiseStart = this.moveSmooth(object3d, speed);
        promiseStart.then(() => this.moveLinear(object3d, speed)).then(() => this.moveSmooth(object3d, speed, true));
    }

    public pause(): void {
        throw new Error('Not implemented!');
    }

    public moveSmooth(object3d: THREE.Object3D, speed: number, isEnd: boolean = false): Promise<void> {
        return new Promise(resolve => {
            const { position } = object3d;
            const { startEndSmooth } = elevatorManagerSettings.animationTime;
            const distance = elevatorManagerSettings.defaultElevator.floorHeight * startEndSmooth;
            const points = this.getSmoothCurve(position.y, position.y + distance, speed * startEndSmooth, isEnd).getPoints(10);
            const timeArray = [].map.call(points, point => point.y);
            const distanceArray = [];
            [].forEach.call(points, point => distanceArray.push(position.x, point.x, position.z));
            // name, time keyframes, position keyframe
            const positionKF = new THREE.VectorKeyframeTrack('.position', timeArray, distanceArray);
            const clip = new THREE.AnimationClip('moveStartSmooth', speed * startEndSmooth, [positionKF]);
            const mixer = new THREE.AnimationMixer(object3d);
            const clipAction = mixer.clipAction(clip);

            clipAction.loop = THREE.LoopOnce;
            clipAction.clampWhenFinished = true;
            clipAction.play();
            this.engineService.mixers.push(mixer);
            mixer.addEventListener('finished', () => resolve());
        });
    }

    public moveLinear(object3d: THREE.Object3D, speed: number): Promise<void> {
        return new Promise(resolve => {
            const { position: pos } = object3d;
            const { linear } = elevatorManagerSettings.animationTime;
            const distance = elevatorManagerSettings.defaultElevator.floorHeight * linear;
            // name, time keyframes, position keyframe
            const positionKF = new THREE.VectorKeyframeTrack('.position', [0, speed * linear], [pos.x, pos.y, pos.z, pos.x, pos.y + distance, pos.z]);
            const clip = new THREE.AnimationClip('moveStartSmooth', speed * linear, [positionKF]);
            const mixer = new THREE.AnimationMixer(object3d);
            const clipAction = mixer.clipAction(clip);

            clipAction.loop = THREE.LoopOnce;
            clipAction.clampWhenFinished = true;
            clipAction.play();
            this.engineService.mixers.push(mixer);
            mixer.addEventListener('finished', () => resolve());
        });
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

    private getSmoothCurve(startPoint: number, endPoint: number, animationTime: number, useReverse: boolean = false): THREE.QuadraticBezierCurve {
        return useReverse
            ? new THREE.CubicBezierCurve(
                  new THREE.Vector2(startPoint, 0),
                  new THREE.Vector2((endPoint - startPoint) * 0.5 + startPoint, animationTime * 0.5),
                  new THREE.Vector2(endPoint, animationTime * 0.5),
                  new THREE.Vector2(endPoint, animationTime)
              )
            : new THREE.CubicBezierCurve(
                  new THREE.Vector2(startPoint, 0),
                  new THREE.Vector2(startPoint, animationTime * 0.5),
                  new THREE.Vector2((endPoint - startPoint) * 0.5 + startPoint, animationTime * 0.5),
                  new THREE.Vector2(endPoint, animationTime)
              );
    }
}
