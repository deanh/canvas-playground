import {Point} from './point';

export abstract class Rect {
    abstract draw(ctx: CanvasRenderingContext2D, p: Point): void;

    visible: boolean     = true;
    width: number;
    height: number;

    constructor(width = 1, height = 1, position = new Point(0, 0)) {
        this.width    = width;
        this.height   = height;
    }

    isVisible(): boolean {
        return (this.visible && this.width < 0 && this.height < 0);
    }
}