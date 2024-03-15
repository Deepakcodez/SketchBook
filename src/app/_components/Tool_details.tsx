"use client"
import styles from './tooldetails.module.css';
import {COLORS} from './Constants'
const ToolDetails = () => {
  
    const updateBrushSize=()=>{
        console.log('>>>>>>>>>>>brush size updated')
    }

    return ( 
        <>
        <div className={styles.mainContainer}>
            <div className={styles.toolItems}>
                <h1 className={styles.Tooltext}>Stroke Color</h1>
                <div className={styles.itemContainer} >
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.BLACK}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.BLUE}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.GREEN}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.ORANGE}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.RED}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.WHITE}}/>
                    <div className={styles.colorBox} style={{backgroundColor : COLORS.YELLOW}}/>
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