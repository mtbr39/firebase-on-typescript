
import ObjectManager from "./ObjectManager"
import Mover from "./Mover"

const initCanvas = (canvas: HTMLCanvasElement) => {

    const objectManager = new ObjectManager(canvas)

    const mover1 = new Mover()
    objectManager.submit(mover1)

    // FrameLoop
    const fps = 60

    let targetInterval = 1000 / fps
    let previousTime = Date.now() - targetInterval

    function loop() {
        let currentTime = Date.now()
        if (currentTime - previousTime > targetInterval) {
            
            objectManager.update()
            objectManager.draw()

            previousTime = Date.now()
        }
        requestAnimationFrame(loop)
    }

    loop()

}

export default initCanvas