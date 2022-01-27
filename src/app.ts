import { Entity } from "./entity";
import { GameLoop } from "./gameLoop";
import { Point, Rectangle } from "./geometry";
import { RedBox } from "./painter/RedBox";

const cvs  = <HTMLCanvasElement>document.getElementById("canvas");
const loop = new GameLoop(cvs);
const frame = new Rectangle(new Point(0, 0), loop.renderer.width, loop.renderer.height);

const p = new Point(0, 0);

class Mover extends Entity {  
    update(time: number, e: Entity): void {
        let {x, y} = e.position;
        e.position = new Point((x + 1) % frame.width, (y + 1) % frame.height);
    }
}

const ent = new Mover(new RedBox(40, 40), p, new Rectangle(p, 40, 40));

loop.addEntity(ent);
loop.start();
