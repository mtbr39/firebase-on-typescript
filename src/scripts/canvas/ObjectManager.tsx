
import Mover from "./Mover";
import ObjectDrawer from "./ObjectDrawer";

class ObjectManager {
    objects: Mover[] = []
    drawer: ObjectDrawer

    constructor(canvas: HTMLCanvasElement, devicePixelRatio: number) {
        this.drawer = new ObjectDrawer(canvas, devicePixelRatio)
    }

    update() {

        this.objects.forEach( (object) => {
            object.update();
        } )
    }

    draw() {
        this.drawer.draw([...this.objects])
    }

    submit(object: Mover) {
        this.objects.push(object)
    }
}

export default ObjectManager