import { Entity } from "./entity";
import { GameLoop } from "./gameLoop";
import { Point } from "./point";
import { RedBox } from "./painter/RedBox";

const cvs  = <HTMLCanvasElement>document.getElementById("canvas");
const loop = new GameLoop(cvs);

let pos  = new Point(100, 100)
let painter= new RedBox(40, 40);

let ent = new Entity(painter, pos, (time, e) => {
    let {x, y} = e.position;
    e.position = new Point(x + 1, y - 1);
});

loop.addEntity(ent);
loop.start();
