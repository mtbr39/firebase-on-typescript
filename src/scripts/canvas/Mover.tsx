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
}

export default Mover