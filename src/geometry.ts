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

interface Shape {
    containsPoint(p: Point): boolean;
    toRectangle(): Rectangle;
}

class Rectangle implements Shape {
    readonly center: Point;
    readonly width: number;
    readonly height: number;

    constructor(center: Point, width: number, height: number) {
        this.center = center;

        this.width      = width;
        this.height     = height;

        // just keep it simple with this convention
        if (this.height <= 0 || this.width <= 0) {
            throw new IllegalConstruction("First point must contain x and y minimums");
        }

    }

    containsPoint(p: Point): boolean {
        const topL = new Point(this.center.x - this.width / 2, this.center.y - this.height / 2)
        return (p.x >= topL.x && p.x <= topL.x + this.width) && 
               (p.y >= topL.y && p.y <= topL.y + this.height);
    }

    intersects(other: Rectangle): boolean {
        const xDist = Math.abs(this.center.x - other.center.x);
        const yDist = Math.abs(this.center.y - other.center.y);

        return (this.width + other.width)   >= (xDist * 2) && 
               (this.height + other.height) >= (yDist * 2);
    }

    toRectangle(): Rectangle {
        return this;
    }
}

class Circle implements Shape {
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

    toRectangle(): Rectangle {
        return new Rectangle(this.center, this.radius, this.radius);
    }
}

export {
    Point,
    Rectangle,
    Circle,
    Shape
}