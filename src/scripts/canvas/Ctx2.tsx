
import { Point } from "./Point"

class CtxStyle {
    fill: string = 'none'
    stroke: string = 'blue'
    line: number = 2
    alpha: number = 1.0
}

class Ctx2 {
    ctx: CanvasRenderingContext2D
    cw: number
    org: Point
    cameraPosition: Point = new Point(0,0)

    constructor(ctx: CanvasRenderingContext2D, cw: number, org: Point) {
        this.ctx = ctx
        this.cw = cw
        this.org = org
    }


    canvasPoint(point:Point): Point {
        return this.org.add(point).sub(this.cameraPosition).power(this.cw)
        // return new Point( (this.org.x + point.x - this.cameraPosition.x) * this.cw, (this.org.y + point.y - this.cameraPosition.y) * this.cw )
    }
    calcPoint(canvasPoint:Point): Point {
        return canvasPoint.power(1/this.cw).sub(this.org).add(this.cameraPosition)
    }
     
    circle(p: Point, radius: number, style: CtxStyle) {
        this.ctx.beginPath();
        this.ctx.arc(this.canvasPoint(p).x, this.canvasPoint(p).y, radius*this.cw, 0, Math.PI * 2, true);
        this.style(style);
        if (style.stroke == 'none') {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
        
    }

    // fillText(text, point, option = {}) {
    //     const offset = option.offset || {x:0, y:0};
    //     const size = option.size * this.cw || 30; // size指定時はズーム可能フォント,未指定時は固定サイズフォント
    //     const color = option.color || "black";
    //     const strokeWidth = option.strokeWidth || "none";
    //     const alpha = option.alpha || 1.0;
    //     this.ctx.font = size+"px 'M PLUS Rounded 1c',serif";
    //     this.style({fillStyle:color, lineWidth:strokeWidth*this.cw, globalAlpha:alpha});
    //     if (strokeWidth == 'none') {
    //         this.ctx.fillText(text, this.canvasPoint(point).x + offset.x*this.cw, this.canvasPoint(point).y + offset.y*this.cw);
    //     } else {
    //         this.ctx.strokeText(text, this.canvasPoint(point).x + offset.x*this.cw, this.canvasPoint(point).y + offset.y*this.cw);
    //     }
    // }
    
    style(style: CtxStyle) {
        this.ctx.fillStyle = style.fill ?? 'black';
        this.ctx.strokeStyle = style.stroke ?? 'black';
        this.ctx.lineWidth = style.line ?? 2;
        this.ctx.globalAlpha = style.alpha ?? 1.0;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }
}

export {CtxStyle, Ctx2}