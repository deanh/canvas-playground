import { Circle, Point, Rectangle } from '../src/geometry'

test('can instantiate and store values in a point', () => {
    const p = new Point(5, 5);
    expect(p.x).toBe(5);
});

test('can substract points', () => {
    const p1 = new Point(10, 10);
    const p2 = new Point(3, 4);
    const p3 = p1.minus(p2);

    expect(p3.x).toBe(7);
    expect(p3.y).toBe(6);
});

test('can add points', () => {
    const p1 = new Point(10, 10);
    const p2 = new Point(3, 4);
    const p3 = p1.plus(p2);

    expect(p3.x).toBe(13);
    expect(p3.y).toBe(14);
});

test('compute distance between 2 points', () => {
    const p1 = new Point(0, 0);
    const p2 = new Point(0, 1);
    const p3 = new Point(-1, 1);

    expect(p1.distance(p2)).toBeCloseTo(1);
    expect(p2.distance(p3)).toBeCloseTo(1);
    expect(p1.distance(p3)).toBeCloseTo(Math.sqrt(2));
});

test('point containment in rectangle', () => {
    const r     = new Rectangle(new Point(0, 0), 20, 20);

    const inP   = new Point(10, 10);
    const outP1 = new Point(30, 0);
    const outP2 = new Point(0, 30);
    const outP3 = new Point(-30, 30);
    const edgeP = new Point(0, 0);

    expect(r.containsPoint(inP)).toBeTruthy();
    expect(r.containsPoint(outP1)).toBeFalsy();
    expect(r.containsPoint(outP2)).toBeFalsy();
    expect(r.containsPoint(outP3)).toBeFalsy();
    expect(r.containsPoint(edgeP)).toBeTruthy();
});

test('rectangle intersection', () => {
    const r = new Rectangle(new Point(0, 0), 20, 20);

    let r2 = new Rectangle(new Point(5, 5), 10, 10);
    expect(r.intersects(r2)).toBeTruthy();
    
    r2 = new Rectangle(new Point(-20, 5), 5, 10);
    expect(r.intersects(r2)).toBeFalsy();
});

test('circle instantiation', () => {
    const c = new Circle(new Point(0, 0), 1);
});
