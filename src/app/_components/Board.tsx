"use client"
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

const Board = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const activeToolItem = useSelector((state:any)=>state.menu.activeMenuItem)
    const {color, size} = useSelector((state:any)=>state.toolDetail[activeToolItem])

    useEffect(()=>{
        if(!canvasRef.current) return ;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")

        // when mount 
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
    } ,[])
    console.log('>>>>>>>>>>>', color, size)

    return ( 

        <>
        <canvas ref={canvasRef}>

        </canvas>
        </>
     );
}
 
export default Board;