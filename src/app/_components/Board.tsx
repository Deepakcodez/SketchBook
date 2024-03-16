"use client"
import { useEffect, useRef } from "react";

const Board = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(!canvasRef.current) return ;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")

        // when mount 
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    },[])

    return ( 

        <>
        <canvas ref={canvasRef}>

        </canvas>
        </>
     );
}
 
export default Board;