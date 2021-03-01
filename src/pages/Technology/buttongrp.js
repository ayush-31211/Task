import {React} from "react";
export default function ButtonGrp(param) {
    return (
         <div id="button_grp">
             <span className="techbtn"  >Design</span>
             <span className="techbtn" style={{borderRight:"2px solid black",borderLeft:"2px solid black"}} >Development</span>
             <span className="techbtn"  >Marketing</span>
         </div>
    )
}