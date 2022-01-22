import { Point } from './point';
import {Painter} from './painter';

type UpdateMethod = (time: DOMHighResTimeStamp, e: Entity) => void;

export class Entity {
    update: UpdateMethod;
    painter: Painter;
    position: Point;

    constructor(painter: Painter, pos: Point, fn: UpdateMethod) {
        this.painter = painter;
        this.position = pos;
        this.update = fn;
    }

    paint(ctx: CanvasRenderingContext2D) {
        this.painter.paint(ctx, this.position);
    }
}