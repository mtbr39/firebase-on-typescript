import { useState, useEffect } from 'react'
import initCanvas from '../scripts/canvas/init'

const Canvas = () => {

    const [canvas,setCanvas] = useState<HTMLCanvasElement|null>(null)
    
    useEffect(()=>{
        const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
        setCanvas(canvas)

        return () => {}
    },[])
    
    useEffect(()=>{
        if(canvas!==null)
        {
            initCanvas(canvas)
        }
    },[canvas])
    
    return <canvas id="canvas"></canvas>
}

export default Canvas