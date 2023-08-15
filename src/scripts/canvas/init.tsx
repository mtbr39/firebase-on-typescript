
import ObjectManager from "./ObjectManager"
// import Mover from "./Mover"
import InputManager from "./InputManager"
import { Radicon } from "./Radicon";
import { OtherPlayerManager } from "./OtherPlayer";
import FirebaseController from "../firebase/FirebaseController";
// import Utl from "./Utl"

const initCanvas = (canvas: HTMLCanvasElement) => {

    canvas.style.backgroundColor = '#213547'
    resizeCanvas()

    const firebase = new FirebaseController()

    const objectManager = new ObjectManager(canvas, window.devicePixelRatio)
    const inputManager = new InputManager(canvas, objectManager.drawer.ctx2)

    const mover1 = new Radicon()
    objectManager.submit(mover1)
    inputManager.submit(mover1)

    const otherPlayerManager = new OtherPlayerManager(objectManager)

    // FrameLoop
    const fps = 60

    let targetInterval = 1000 / fps
    let previousTime = Date.now() - targetInterval

    function loop() {
        let currentTime = Date.now()
        if (currentTime - previousTime > targetInterval) {
            
            firebase.database.updateUserData(mover1.position.rowVector())
            inputManager.update()
            objectManager.update()
            objectManager.draw()

            previousTime = Date.now()
        }
        requestAnimationFrame(loop)
    }

    loop()

    function resizeCanvas() {
        let cssCanvasSize = {width: document.documentElement.clientWidth, height: document.documentElement.clientHeight};
        let pixelRatioCanvasSize = {width: cssCanvasSize.width * window.devicePixelRatio, height: cssCanvasSize.height * window.devicePixelRatio};

        canvas.style.width = `${cssCanvasSize.width}px`;
        canvas.style.height = `${cssCanvasSize.height}px`;

        canvas.width = pixelRatioCanvasSize.width;
        canvas.height = pixelRatioCanvasSize.height;
        // canvas.width = cssCanvasSize.width;
        // canvas.height = cssCanvasSize.height;
        // if(Utl.isSmartPhone()) {
        //     canvas.width = size.w * window.devicePixelRatio;
        //     canvas.height = size.h * window.devicePixelRatio;
        // }
    };

}

export default initCanvas