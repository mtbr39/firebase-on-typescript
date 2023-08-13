
import Mover from "./Mover";
import ObjectDrawer from "./ObjectDrawer";

class ObjectManager {
    objects: Mover[] = []
    drawer: ObjectDrawer

    constructor(canvas: HTMLCanvasElement) {
        this.drawer = new ObjectDrawer(canvas)
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
        console.log("submit-debug", this.objects);
    }
}

export default ObjectManager