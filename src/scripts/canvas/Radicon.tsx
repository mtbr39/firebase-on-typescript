import Mover from "./Mover";
import { Point } from "./Point";



class Radicon extends Mover {
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false
    
    constructor() {
        super()

    }

    update() {
        if (this.isGoingDestination) {
            
        }
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        console.log("Mover-input-debug", eventType)
        this.position = mousePosition
    }

    moveTowards() {

    }

}



export {Radicon}