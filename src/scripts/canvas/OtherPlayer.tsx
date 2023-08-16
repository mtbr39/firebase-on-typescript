
import Mover from "./Mover";
import ObjectManager from "./ObjectManager";
import { Point, Position } from "./Point";
import {Database, onValue, ref} from "firebase/database";

class OtherPlayerManager {
    players: OtherPlayer[] = []
    networker: OtherPlayerNetworker
    objectManagaer: ObjectManager

    constructor(objectManagaer: ObjectManager, networker: OtherPlayerNetworker) {
        this.objectManagaer = objectManagaer
        
        this.networker = networker
        this.networker.submitUpdatePlayersFunctionOnValue(this.players, this.objectManagaer)

    }
}

class OtherPlayer implements Mover {
    uid: string = ""
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

export interface OtherPlayerNetworker {
    submitUpdatePlayersFunctionOnValue(players: OtherPlayer[], objectManagaer: ObjectManager): void
}

class BasicOtherPlayerNetworker implements OtherPlayerNetworker {
    db: Database
    syncDataPlayersRef: string

    constructor(db: Database, syncDataPlayersRef: string) {
        this.db = db
        this.syncDataPlayersRef = syncDataPlayersRef
    }

    public submitUpdatePlayersFunctionOnValue(players: OtherPlayer[], objectManagaer: ObjectManager) {
        onValue(ref(this.db, this.syncDataPlayersRef), (snapshot) => {
            const data = snapshot.val();
            if(!!data==!!data){}
            this.updatePlayers(data, players, objectManagaer);
        });
    }

    private updatePlayers(syncDataJson: any, players: OtherPlayer[], objectManagaer: ObjectManager) {
        Object.keys(syncDataJson).forEach((key) => {
            // console.log("key=" + key + ", value=", syncDataJson[key]);
            const uid = key
            const position = syncDataJson[key].position

            let existPlayerMatchedUid = false
            players.forEach( (player) => {
                if(uid === player.uid) {
                    player.position = position
                    existPlayerMatchedUid = true
                }
            } )
            if(!existPlayerMatchedUid) {
                const newPlayer = new OtherPlayer()
                newPlayer.uid = uid
                newPlayer.position = position
                players.push( newPlayer )
                objectManagaer.submit( newPlayer )
            }
        });
    }
}

export {OtherPlayer, OtherPlayerManager, BasicOtherPlayerNetworker}