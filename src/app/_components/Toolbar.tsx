import { GoPencil } from "react-icons/go";
import { BsEraser } from "react-icons/bs";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
const Toolbox = () => {
    return ( 
        <>
        <div className="Toolbox  flex gap-8 justify-center items-center px-6 rounded-md  bg-slate-50/25 h-[3rem] w-fit border-[1px] border-white  m-auto mt-3 ">
            <div className="hover:bg-violet-300 p-2 rounded">
                <GoPencil color="black"/>
            </div>
            <div className="hover:bg-violet-300 p-2 rounded">
                <BsEraser  color="black"/>
            </div>
            <div className="hover:bg-violet-300 p-2 rounded">
                <FaArrowRotateLeft  color="black"/>
            </div>
            <div className="hover:bg-violet-300 p-2 rounded">
                <FaArrowRotateRight  color="black"/>
            </div>
            <div className="hover:bg-violet-300 p-2 rounded">
                <MdFileDownload color="black"/>
            </div>
        </div>
        </>
     );
}
 
export default Toolbox;