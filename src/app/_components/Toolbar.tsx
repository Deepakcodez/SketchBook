"use client"
import { FaPencilAlt } from "react-icons/fa";
import { BsEraserFill } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import styles from './toolbar.module.css'
import {TOOL_ITEMS} from './Constants'
import { useDispatch } from "react-redux";
import {menuItemClick, activeItemClick} from '@/slice/menuSlice'
const Toolbox = () => {

   const dispatch = useDispatch()
  const handleToolClick=(itemName:string)=>{
      dispatch(menuItemClick(itemName))
  }

    return ( 
        <>
        <div className={styles.mainContainer}>
            <div className={styles.iconWrapper} onClick={()=>handleToolClick(TOOL_ITEMS.PENCIL)}>
              <FaPencilAlt className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}  onClick={()=>handleToolClick(TOOL_ITEMS.ERASER)}>
              <BsEraserFill className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}>
              <FaArrowRotateLeft className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}>
              <FaArrowRotateRight className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}>
              <MdFileDownload className={styles.icons} />
            </div>
        </div>
        </>
     );
}
 
export default Toolbox;