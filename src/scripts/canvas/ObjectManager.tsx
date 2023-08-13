
import Mover from "./Mover";

class ObjectManager {
    objects: Mover[] = []
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
    }

    update() {

        this.objects.forEach( (object) => {
            object.update();
        } )
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.objects.forEach( (object) => {
            switch ( object.drawType ) {
                case 'drawMethod':
                    object.drawSelf();
                    break;
                case undefined:
                case 'circle':
                    this.ctx.beginPath()
                    this.ctx.arc(object.position.x, object.position.y, object.radius, 0, Math.PI * 2, true)
                    this.ctx.fillStyle = "lightskyblue"
                    // this.ctx.fill()
                    this.ctx.strokeStyle = 'deepskyblue'
                    this.ctx.lineWidth = 1
                    this.ctx.stroke()
                    break;
                case 'rect':
                    
                    break;
            }
        } )
    }

    submit(object: Mover) {
        this.objects.push(object)
        console.log("submit-debug", this.objects);
    }
}

export default ObjectManager