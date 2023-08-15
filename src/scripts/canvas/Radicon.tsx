import FirebaseRealtimeDatabase from "../firebase/database";
import Mover from "./Mover";
import { Point, Position } from "./Point";



class Radicon implements Mover {
    position: Position = new Position(230, 60)
    radius: number = 10
    drawType: string = 'circle'
    velocity: number = 2
    
    destinationPoint: Point = Point.zero
    isGoingDestination: Boolean = false

    sender: RadiconSender
    private sendPace: {count: number, maxCount: number} = {count: 0, maxCount: 60}
    
    constructor(sender: RadiconSender) {
        this.sender = sender
    }

    update() {
        if (this.isGoingDestination) {
            this.goDestination()
        }
    }

    drawSelf() {

    }

    onInput(eventType: string, mousePosition: Point) {
        if(eventType == eventType) {}
        this.isGoingDestination = true
        this.destinationPoint = mousePosition
        
    }

    goDestination() {
        this.position.move(this.destinationPoint, this.velocity)

        if ( this.position.isReach(this.destinationPoint, this.velocity) ) {
            this.isGoingDestination = false
        }

        if (this.sendPace.count < this.sendPace.maxCount) {
            this.sendPace.count++
        } else {
            this.sendPace.count = 0
            this.sender.updatePosition(this.position.rowVector())
        }
        
    }

}

interface RadiconSender {
    updatePosition(position: {x: number, y: number}): void
}

class BasicRadiconSender implements RadiconSender {
    db: FirebaseRealtimeDatabase

    constructor(db: FirebaseRealtimeDatabase) {
        this.db = db
    }

    updatePosition(position: {x: number, y: number}): void {
        console.log("ユーザーのPositionをFirebaseへ送信", position)
        this.db.updateUserData(position)
    }
}

export {Radicon, BasicRadiconSender}