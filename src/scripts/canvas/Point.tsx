class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    sub(point: Point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
    power(number: number) {
        return new Point(this.x * number, this.y * number);
    }
    static zero: Point = new Point(0, 0)
}

export { Point }