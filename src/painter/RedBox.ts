import { Point } from "../point";
import { Painter } from "../painter";

export class RedBox extends Painter {
    paint(ctx: CanvasRenderingContext2D, p: Point): void {
        let {x, y} = p;
        ctx.save();
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, this.width, this.height);
        ctx.restore();
    }
}