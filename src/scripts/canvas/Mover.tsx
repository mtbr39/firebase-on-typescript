import { Point } from "./Point"

interface Mover {
    position: Point
    radius: number
    drawType: string

    update(): void
    drawSelf(): void
    onInput(eventType: string, mousePosition: Point): void
}

export default Mover