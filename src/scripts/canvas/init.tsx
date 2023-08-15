
import ObjectManager from "./ObjectManager"
// import Mover from "./Mover"
import InputManager from "./InputManager"
import { Radicon } from "./Radicon";
// import Utl from "./Utl"

const initCanvas = (canvas: HTMLCanvasElement) => {

    canvas.style.backgroundColor = '#213547';

    const objectManager = new ObjectManager(canvas)
    const inputManager = new InputManager(canvas, objectManager.drawer.ctx2)

    const mover1 = new Radicon()
    objectManager.submit(mover1)
    inputManager.submit(mover1)

    // FrameLoop
    const fps = 60

    let targetInterval = 1000 / fps
    let previousTime = Date.now() - targetInterval

    function loop() {
        let currentTime = Date.now()
        if (currentTime - previousTime > targetInterval) {
            
            inputManager.update()
            objectManager.update()
            objectManager.draw()

            previousTime = Date.now()
        }
        requestAnimationFrame(loop)
    }

    loop()

    let cssCanvasSize = {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
    // let pixelRatioCanvasSize = {width: cssCanvasSize.width * window.devicePixelRatio, height: cssCanvasSize.height * window.devicePixelRatio};

    resizeCanvas();

    function resizeCanvas() {
        canvas.style.width = `${cssCanvasSize.width}px`;
        canvas.style.height = `${cssCanvasSize.height}px`;

        // canvas.width = pixelRatioCanvasSize.width;
        // canvas.height = pixelRatioCanvasSize.height;
        canvas.width = cssCanvasSize.width;
        canvas.height = cssCanvasSize.height;
        // if(Utl.isSmartPhone()) {
        //     canvas.width = size.w * window.devicePixelRatio;
        //     canvas.height = size.h * window.devicePixelRatio;
        // }
    };

}

export default initCanvas