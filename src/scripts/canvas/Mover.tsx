import { Point } from "./Point"

class Mover {

    position: Point = new Point(230, 60)
    radius: number = 10
    drawType: string = 'circle'

    constructor() {

    }

    update() {
        this.position.x++
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        console.log("Mover-input-debug", eventType)
        this.position = mousePosition
    }
}

export default Mover