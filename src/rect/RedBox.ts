import { Point } from "../point";
import { Rect } from "../rect";

export class RedBox extends Rect {
    draw(ctx: CanvasRenderingContext2D, p: Point): void {
        let {x, y} = p;
        ctx.save();
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, this.width, this.height);
        ctx.restore();
    }
}