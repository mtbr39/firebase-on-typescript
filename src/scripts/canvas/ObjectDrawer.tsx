
import Mover from "./Mover";

class ObjectDrawer {
    
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
    }

    draw(objects: Mover[]) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        objects.forEach( (object) => {
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
}

export default ObjectDrawer