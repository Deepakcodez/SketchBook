import { FaPencilAlt } from "react-icons/fa";
import { BsEraserFill } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import styles from './toolbar.module.css'
const Toolbox = () => {
    return ( 
        <>
        <div className={styles.mainContainer}>
            <div className={styles.iconWrapper}>
              <FaPencilAlt className={styles.icons} />
            </div>
            <div className={styles.iconWrapper}>
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