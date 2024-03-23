"use client"
import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { TOOL_ITEMS } from "./Constants";
import {menuItemClick, activeItemClick} from '@/slice/menuSlice'

const Board = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const shouldDraw = useRef<boolean>(false);
    const dispatch = useDispatch();

    const {activeMenuItem, actionMenuItem} = useSelector((state:any)=>state.menu)
        console.log('>>>>>>>>>>>ati', activeMenuItem)
    const { color, size }: { color: string; size: number } = useSelector((state: any) => state.toolDetail[activeMenuItem]);
 





  useEffect(()=>{
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if(actionMenuItem === TOOL_ITEMS.DOWNLOAD){

        const URL = canvas.toDataURL();
        const anchor =  document.createElement('a');
        anchor.href = URL;
        anchor.download = `my_sketch${Math.random()*10}.jpeg`
        anchor.click()
        dispatch(activeItemClick(null))
        // console.log('>>>>>>>>>>>', URL)
    }
  },[actionMenuItem])
  

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        

        const changeConfig = () => {
            if (context) {
                context.strokeStyle = color;
                context.lineWidth = size;
            }
        };

        changeConfig(); // Call changeConfig outside the function
        
        console.log('>>>>>>>>>>>', color, size);

    }, [color, size]);

    useLayoutEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        const handleMouseDown = (e: MouseEvent) => {
            shouldDraw.current = true;
            if (context) {
                context.beginPath();
                context.moveTo(e.clientX, e.clientY);
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!shouldDraw.current || !context) return;
            context.lineTo(e.clientX, e.clientY);
            context.stroke();
        };

        const handleMouseUp = () => {
            shouldDraw.current = false;
        };

        if (context) {
            canvas.addEventListener('mousedown', handleMouseDown);
            canvas.addEventListener('mousemove', handleMouseMove);
            canvas.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            if (context) {
                canvas.removeEventListener('mousedown', handleMouseDown);
                canvas.removeEventListener('mousemove', handleMouseMove);
                canvas.removeEventListener('mouseup', handleMouseUp);
            }
        };
    }, []);

    return (
        <canvas ref={canvasRef}> </canvas>
    );
}

export default Board;
