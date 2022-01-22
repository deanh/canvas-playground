import { CanvasRenderer } from "./canvasRenderer"
import { Entity } from "./entity";
import { EntityManager } from "./entityManager";

export class GameLoop {
    renderer: CanvasRenderer;
    entityManager: EntityManager;
    frameId: number;

    constructor(canvasElement: HTMLCanvasElement) {
        this.renderer = new CanvasRenderer(canvasElement);
        this.entityManager = new EntityManager();
        this.frameId = -1;
    }

    addEntity(e: Entity) {
        this.entityManager.addEntity(e);
    }

    start() {
        this.frameId = requestAnimationFrame(this.run.bind(this));
    }

    run(time: DOMHighResTimeStamp = performance.now()) {
        let em = this.entityManager;

        this.frameId = requestAnimationFrame(this.run.bind(this));

        em.update(time);
        let renderQueue = em.getRenderQueue();
        this.renderer.render(renderQueue);
    }
}
