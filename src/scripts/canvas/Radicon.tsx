import Mover from "./Mover";
import { Point } from "./Point";



class Radicon implements Mover {
    position: Point = new Point(230, 60)
    radius: number = 10
    drawType: string = 'circle'
    velocity: number = 4
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false

    private move = new PositionCalculator()
    
    constructor() {

    }

    update() {
        if (this.isGoingDestination) {
            this.moveTowards()
        }
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        console.log("Radicon-onInput-debug", eventType, mousePosition)
        this.isGoingDestination = true
        this.destinationPoint = mousePosition
        
    }

    moveTowards() {
        this.position = this.move.getMovePosition(this.position, this.destinationPoint, this.velocity)
    }

}

class PositionCalculator {
    getMovePosition(position: Point, destinationPoint: Point, velocity: number) {
        return position.add(this.getDeltaMoveTowards(position, destinationPoint, velocity))
    }

    getDeltaMoveTowards(startPoint: Point, destinationPoint: Point, velocity: number): Point {
        const towardsVector = destinationPoint.sub(startPoint)
        const towardsDirection = Math.atan2( towardsVector.y, towardsVector.x )
        return this.getDeltaToDirection(towardsDirection, velocity)
    }

    getDeltaToDirection(direction: number, velocity: number) {
        return new Point( velocity * Math.cos(direction), velocity * Math.sin(direction) )
    }
}



export {Radicon}