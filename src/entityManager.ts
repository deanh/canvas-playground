import { Entity } from './entity';

// This is not a great implementation for a large number of entities,
// but rather the good enough version to get things working. This is
// the interface–we'll do much better with a tree eventually
export class EntityManager {
    entities: Array<Entity>;

    constructor() {
        this.entities = new Array<Entity>();
    }

    addEntity(e: Entity): Entity {
        this.entities.push(e);
        return e;
    }

    removeEntity(e): boolean {
        let idx = this.entities.indexOf(e);
        if (idx === -1 ) {
            return false;
        } else {
            this.entities.splice(idx, 1);
            return true;
        }
    } 

    getRenderQueue(): Array<Entity> {
        return this.entities.slice();
    }

    update(time: DOMHighResTimeStamp) {
        for (let e of this.entities) {
            e.update(time, e);
        }
    }
}