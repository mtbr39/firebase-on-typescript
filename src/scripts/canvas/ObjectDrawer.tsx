
import Mover from "./Mover";
import { Point } from "./Point";
import {CtxStyle, Ctx2} from "./Ctx2";

class ObjectDrawer {
    
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    ctx2: Ctx2

    constructor(canvas: HTMLCanvasElement, devicePixelRatio: number) {
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")!
        const cw = Math.sqrt(canvas.width * canvas.height) * 0.01
        const org = new Point(0,0)
        this.ctx2 = new Ctx2(this.ctx, cw, org, devicePixelRatio)
    }

    draw(objects: Mover[]) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        objects.forEach( (object) => {
            switch ( object.drawType ) {
                case 'drawMethod':
                    object.drawSelf();
                    break;
                case undefined:
                case 'circle': {
                    const style = {stroke: 'white'} as CtxStyle
                    this.ctx2.circle(object.position, object.radius, style)
                    break;
                }
                case 'rect':
                    
                    break;
            }
        } )
    }
}

export default ObjectDrawer