import { Entity } from "./entity";
import { GameLoop } from "./gameLoop";
import { Point, Rectangle } from "./geometry";
import { RedBox } from "./painter/RedBox";

const cvs  = <HTMLCanvasElement>document.getElementById("canvas");
const loop = new GameLoop(cvs);
const frame = new Rectangle(new Point(0, 0), new Point(loop.renderer.width, loop.renderer.height));

const ent = new Entity(new RedBox(40, 40), new Point(0, 0), (time, e) => {
    let {x, y} = e.position;

    e.position = new Point((x + 2) % frame.width, (y + 1) % frame.height);
});

loop.addEntity(ent);
loop.start();
