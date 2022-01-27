import { Point, Shape } from './geometry';
import { Painter } from './painter';

type UpdateMethod = (time: DOMHighResTimeStamp, e: Entity) => void;
const nop = (time: DOMHighResTimeStamp, e: Entity) => {};

export abstract class Entity {
    abstract update(time: DOMHighResTimeStamp, e: Entity): void;
    painter: Painter;
    position: Point;
    shape: Shape;

    constructor(painter: Painter, pos: Point, shape: Shape) {
        this.painter = painter;
        this.position = pos;
        this.shape = shape;
    }

    paint(ctx: CanvasRenderingContext2D) {
        this.painter.paint(ctx, this.position);
    }
}