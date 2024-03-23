"use client"
import { FaPencilAlt } from "react-icons/fa";
import { BsEraserFill } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import styles from './toolbar.module.css'
import {TOOL_ITEMS} from './Constants'
import { useDispatch, useSelector } from "react-redux";
import {menuItemClick, activeItemClick} from '@/slice/menuSlice'
import cx from 'classnames'








const Toolbox = () => {

   const dispatch = useDispatch()
   const activeToolItem = useSelector((state:any)=>state.menu.activeMenuItem)
   const actionMenuItem = useSelector((state:any)=>state.menu.actionMenuItem)
  
   const handleToolClick=(itemName:string)=>{
      dispatch(menuItemClick(itemName))
  }
   const handleActionItemClick=(itemName : string)=>{
      dispatch(activeItemClick(itemName))
  }

    return ( 
        <>
        <div className={styles.mainContainer}>
            <div className={cx(styles.iconWrapper,{[styles.active]: activeToolItem === TOOL_ITEMS.PENCIL})} onClick={()=>handleToolClick(TOOL_ITEMS.PENCIL)}>
              <FaPencilAlt className={styles.icons} />
            </div>
            <div className={cx(styles.iconWrapper,{[styles.active]: activeToolItem === TOOL_ITEMS.ERASER})}   onClick={()=>handleToolClick(TOOL_ITEMS.ERASER)}>
              <BsEraserFill className={styles.icons} />
            </div>
            <div className={styles.iconWrapper} onClick={()=>handleActionItemClick(TOOL_ITEMS.UNDO)}>
              <FaArrowRotateLeft className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}  onClick={()=>handleActionItemClick(TOOL_ITEMS.REDO)}>
              <FaArrowRotateRight className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}   onClick={()=>handleActionItemClick(TOOL_ITEMS.DOWNLOAD)}>
              <MdFileDownload className={styles.icons} />
            </div>
        </div>
        </>
     );
}
 
export default Toolbox;