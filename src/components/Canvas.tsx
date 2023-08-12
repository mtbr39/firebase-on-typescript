import { useState, useEffect } from 'react'
import initCanvas from '../scripts/canvas/init'

const Canvas = () => {
    // contextを状態として持つ
    const [context,setContext] = useState<CanvasRenderingContext2D|null>(null)
    // 画像読み込み完了トリガー
    // const [loaded,setLoaded] = useState(false)
    // onMountでcontextを取る
    useEffect(()=>{
        const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement
        const canvasContext = canvas.getContext("2d")
        setContext(canvasContext)
    },[])
    // context登録後
    useEffect(()=>{
        if(context!==null)
        {
            initCanvas(context)
            // const img = new Image()
            // img.src = "img.jpg" // 描画する画像など
            // img.onload = () => {
            //     context.drawImage(img,0,0)
            //     // 更にこれに続いて何か処理をしたい場合
            //     setLoaded(true)
            // }
        }
    },[context])
    // useEffect(()=>{
    //     if(loaded)
    //     {
    //         // それに続く処理
    //     }
    // },[loaded])
    return <canvas width="1280" height="720" id="canvas"></canvas>
}

export default Canvas