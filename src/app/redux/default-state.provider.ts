import { localStorageProject } from '../constants/project.constants';

export default class DefaultState {
    private state = null;

    constructor() {
        this.state = this.getLocalStorage();
    }

    public getState() {
        return this.state;
    }

    public setState(state) {
        localStorage.setItem(localStorageProject, JSON.stringify(state));
    }

    private getLocalStorage() {
        return JSON.parse(localStorage.getItem(localStorageProject));
    }
}