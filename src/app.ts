import { Entity } from "./entity";
import { GameLoop } from "./gameLoop";
import { Point } from "./point";
import { RedBox } from "./rect/RedBox";

const cvs  = <HTMLCanvasElement>document.getElementById("canvas");
const loop = new GameLoop(cvs);

let pos  = new Point(100, 100)
let rect = new RedBox(40, 40);

let ent = new Entity(rect, pos, (time, e) => {
    let {x, y} = e.position;
    e.position = new Point(x + 1, y - 1);
});

loop.addEntity(ent);
loop.start();
