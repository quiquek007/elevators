export default class DefaultState {
    private nameStorage: string = 'elevatorsProject'
    private state = null;

    constructor() {
        this.state = this.getLocalStorage();
    }

    public getState() {
        return this.state;
    }

    public setState(state) {
        localStorage.setItem(this.nameStorage, JSON.stringify(state));
    }

    private getLocalStorage() {
        return JSON.parse(localStorage.getItem(this.nameStorage));
    }
}