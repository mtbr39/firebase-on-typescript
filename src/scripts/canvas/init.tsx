
const initCanvas = (ctx: CanvasRenderingContext2D) => {

    ctx.beginPath();
    ctx.arc(230, 60, 40, 0, Math.PI * 2, true);
    ctx.fillStyle = "lightskyblue";
    ctx.fill();
    ctx.strokeStyle = 'deepskyblue';
    ctx.lineWidth = 5;
    ctx.stroke();

}

export default initCanvas