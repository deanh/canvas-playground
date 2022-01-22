import { Point } from './point';
import {Rect} from './rect';

type UpdateMethod = (time: DOMHighResTimeStamp, e: Entity) => void;

export class Entity {
    update: UpdateMethod;
    rect: Rect;
    position: Point;

    constructor(rect: Rect, pos: Point, fn: UpdateMethod) {
        this.rect = rect;
        this.position = pos;
        this.update = fn;
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.rect.draw(ctx, this.position);
    }
}