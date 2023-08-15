import Mover from "./Mover";
import { Point } from "./Point";



class Radicon implements Mover {
    position: Point = new Point(230, 60)
    radius: number = 10
    drawType: string = 'circle'
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false
    
    constructor() {

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