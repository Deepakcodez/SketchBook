"use client"
import React, { ChangeEvent } from 'react';
import styles from './tooldetails.module.css';
import {COLORS, TOOL_ITEMS} from './Constants'
import { useDispatch, useSelector } from 'react-redux';
import { changeBrushSize,changeColor } from '@/slice/toolDetailSlice';
import cx from 'classnames'
const ToolDetails = () => {
  
    const dispatch = useDispatch()
 
    
    const activeToolItem = useSelector((state:any)=>state.menu.activeMenuItem)
    const {color, size} = useSelector((state:any)=>state.toolDetail[activeToolItem])
    console.log('>>>>>>>>>>>-', activeToolItem)
    const showStrokeToolOption = activeToolItem === TOOL_ITEMS.PENCIL;
    const showBrushToolOption =  activeToolItem === TOOL_ITEMS.PENCIL || activeToolItem === TOOL_ITEMS.ERASER
   
    const updateBrushSize = (e: ChangeEvent<HTMLInputElement>) =>{
        dispatch(changeBrushSize({item : activeToolItem ,  size: parseInt(e.target.value) }));
    }
    const updateColor = (newColor :string) =>{
        dispatch(changeColor({item : activeToolItem ,  color : newColor }));
    }

    return ( 
        <>
        <div className={styles.mainContainer}>
            <div className={styles.toolItems}>
                <h1 className={styles.Tooltext}>Stroke Color</h1>
                <div className={styles.itemContainer} >
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK})}  style={{backgroundColor : COLORS.BLACK}} onClick={()=>updateColor(COLORS.BLACK)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE})}   style={{backgroundColor : COLORS.BLUE}}  onClick={()=>updateColor(COLORS.BLUE)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.GREEN})}   style={{backgroundColor : COLORS.GREEN}}  onClick={()=>updateColor(COLORS.GREEN)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE})}  style={{backgroundColor : COLORS.ORANGE}}   onClick={()=>updateColor(COLORS.ORANGE)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.RED})}     style={{backgroundColor : COLORS.RED}}    onClick={()=>updateColor(COLORS.RED)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.WHITE})}   style={{backgroundColor : COLORS.WHITE}}   onClick={()=>updateColor(COLORS.WHITE)}/>
                    <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW})}  style={{backgroundColor : COLORS.YELLOW}}    onClick={()=>updateColor(COLORS.YELLOW)}/>
                </div>
            </div>
            <div className={styles.toolItems}>
                <h1 className={styles.Tooltext}>Brush Size</h1>
                <div className={styles.itemContainer} >
                   <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ToolDetails;