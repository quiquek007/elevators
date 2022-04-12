import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FontProviderService {
    public isLoaded = new BehaviorSubject<boolean>(false);
    private latoLightRegular: THREE.Font;
    private loader = new THREE.FontLoader();

    constructor() {
        this.loader.load('assets/fonts/Lato_Light_Regular.json', font => {
            this.latoLightRegular = font;
            this.isLoaded.next(true);
        });
    }

    public getLatoLightRegular(): THREE.Font {
        if (!this.latoLightRegular) throw Error('The font is not loaded!');

        return this.latoLightRegular;
    }
}
