
import { Point } from "./Point"
import Mover from "./Mover"
import { Ctx2 } from "./Ctx2";

class InputManager {
    canvas: HTMLCanvasElement
    mousePosition: Point = new Point(0,0);
    receivers: Mover[] = []
    eventType: string = ''
    ctx2: Ctx2

    constructor(canvas: HTMLCanvasElement, ctx2: Ctx2) {
        this.canvas = canvas;
        this.ctx2 = ctx2

        if (true) {
            this.canvas.addEventListener('pointerdown', (e) => {
                this.eventType = 'pointerdown'
                this.mousePosition = this.getMousePosition(e);
            });
        }

    }

    submit(object: Mover) {
        this.receivers.push(object);
    }

    getMousePosition(event: any) {
        const rect = this.canvas.getBoundingClientRect();
        const mousePositionOnCanvas = new Point(event.clientX - rect.left, event.clientY - rect.top)
        return this.ctx2.calcPoint(mousePositionOnCanvas)
    }

    update() {
        if (this.eventType !== '') {
            this.receivers.forEach( (receiver) => {
                receiver.onInput(this.eventType, this.mousePosition);
            } );

        }

        this.eventType = ''
    }

    static isSmartPhone() {
        if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            return true;
        } else {
            return false;
        }
    }
}

export default InputManager