
import Mover from "./Mover";
import ObjectManager from "./ObjectManager";
import { Point, Position } from "./Point";

class OtherPlayerManager {
    players: Mover[] = []

    constructor(objectManagaer: ObjectManager) {
        
        for (let i=0; i<4; i++) {
            let player = new OtherPlayer()
            this.players.push( player )
            objectManagaer.submit( player )
        }
    }
}

class OtherPlayer implements Mover {
    position: Position = new Position(Math.random() * 100, 60)
    radius: number = 10
    drawType: string = 'circle'
    velocity: number = 2
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false
    
    constructor() {

    }

    update() {
        if (this.isGoingDestination) {
            this.position.move(this.destinationPoint, this.velocity)
        }
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        console.log("Radicon-onInput-debug", eventType, mousePosition)
        this.isGoingDestination = true
        this.destinationPoint = mousePosition
        
    }

}

export {OtherPlayer, OtherPlayerManager}