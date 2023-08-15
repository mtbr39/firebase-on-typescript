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
    norm() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
    protected replace(point: Point) {
        this.x = point.x
        this.y = point.y
    }

    static zero: Point = new Point(0, 0)
}

class Position extends Point {
    isReach(targetPosition: Point, distanceRatio: number) {
        const vector = targetPosition.sub(this)
        const distance = 0.5
        return vector.norm() <= distance * distanceRatio
    }

    move(destinationPoint: Point, velocity: number) {
        if ( !this.isReach(destinationPoint, velocity) ) {
            this.replace( this.add(this.getDeltaMoveTowards(destinationPoint, velocity)) )
        }
        return this
    }

    protected getDeltaMoveTowards(destinationPoint: Point, velocity: number): Point {
        const towardsVector = destinationPoint.sub(this)
        const towardsDirection = Math.atan2( towardsVector.y, towardsVector.x )
        return this.getDeltaToDirection(towardsDirection, velocity)
    }

    protected getDeltaToDirection(direction: number, velocity: number) {
        return new Point( velocity * Math.cos(direction), velocity * Math.sin(direction) )
    }
}

export { Point, Position }