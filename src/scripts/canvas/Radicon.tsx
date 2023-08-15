import Mover from "./Mover";
import { Point, Position } from "./Point";



class Radicon implements Mover {
    position: Position = new Position(230, 60)
    radius: number = 10
    drawType: string = 'circle'
    velocity: number = 4
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false

    // private move = new PositionCalculator()
    
    constructor() {

    }

    update() {
        if (this.isGoingDestination) {
            this.position.move(this.destinationPoint, this.velocity)
        }
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        console.log("Radicon-onInput-debug", eventType, mousePosition)
        this.isGoingDestination = true
        this.destinationPoint = mousePosition
        
    }

}


export {Radicon}