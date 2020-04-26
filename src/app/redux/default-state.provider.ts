import { localStorageProject } from '../constants/project.constants';

export default class DefaultState {
    private state: any = null;

    constructor() {
        this.state = this.getLocalStorage();
    }

    public getState(): any {
        return this.state;
    }

    public setState(state: any): void {
        localStorage.setItem(localStorageProject, JSON.stringify(state));
    }

    private getLocalStorage(): any {
        return JSON.parse(localStorage.getItem(localStorageProject));
    }
}