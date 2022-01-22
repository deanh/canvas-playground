class IllegalConstruction extends Error {};

class Point {
    readonly x: number;
    readonly y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    minus(p: Point): Point {
        return new Point(this.x - p.x, this.y - p.y);
    }

    plus(p: Point): Point {
        return new Point(this.x + p.x, this.y + p.y);
    }

    distance(p: Point): number {
        let {x: a, y: b} = this.minus(p);
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
}

class Rectangle {
    readonly topLeft: Point;
    readonly bottomRight: Point;
    readonly topRight: Point;
    readonly bottomLeft: Point;
    readonly width: number;
    readonly height: number;

    constructor(topL: Point, bottomR: Point) {
        this.topLeft     = topL;
        this.bottomRight = bottomR;

        this.width      = bottomR.x - topL.x;
        this.height     = bottomR.y - topL.y;

        // just keep it simple with this convention
        if (this.height <= 0 || this.width <= 0) {
            throw new IllegalConstruction("First point must contain x and y minimums");
        }

        this.topRight   = new Point(bottomR.x, topL.y);
        this.bottomLeft = new Point(topL.x, bottomR.y);
    }

    containsPoint(p: Point): boolean {
        return (p.x >= this.topLeft.x && p.x <= this.bottomRight.x) && 
               (p.y >= this.topLeft.y && p.y <= this.bottomRight.y);
    }

    intersects(other: Rectangle): boolean {
        return this.containsPoint(other.topLeft)     || 
               this.containsPoint(other.topRight)    ||
               this.containsPoint(other.bottomLeft)  ||
               this.containsPoint(other.bottomRight);
    }
}

class Circle {
    readonly center: Point;
    readonly radius: number;

    constructor(p: Point, r: number) {
        this.center = p;
        this.radius = r;
    }

    containsPoint(p: Point): boolean {
        return this.center.distance(p) <= this.radius;
    }

    intersects(c: Circle): boolean {
        return this.center.distance(c.center) <= this.radius + c.radius;
    }
}

export {
    Point,
    Rectangle,
    Circle
}