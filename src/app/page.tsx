import Image from "next/image";
import Toolbox from "./_components/Toolbar";
import ToolDetails from "./_components/Tool_details";
import Board from "./_components/Board";

export default function Home() {
  return (
    <>
    <div className="relative flex  justify-center">

     <Toolbox/>
     <ToolDetails/>
     <Board/>
    </div>
    </>
  );
}
