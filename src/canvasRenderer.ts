import { Entity } from './entity';
import {Rect} from './rect';

export class CanvasRenderer {
    width: number;
    height: number;
    screenBuf: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement) {
        this.screenBuf = canvasElement.getContext('2d');
        this.width  = parseInt(window.getComputedStyle(canvasElement).getPropertyValue("width"), 10);
        this.height = parseInt(window.getComputedStyle(canvasElement).getPropertyValue("width"), 10);
    }

    clearFrame() {
        this.screenBuf.clearRect(0, 0, this.width, this.height);
    }

    render(renderQueue: Array<Entity>) {
        let ctx = this.screenBuf;
        this.clearFrame();
        for (let e of renderQueue) {
            e.draw(ctx);
        }
    }

}

