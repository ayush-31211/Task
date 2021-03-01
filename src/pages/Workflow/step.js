import {React} from "react";
import Btn from "../../assets/round_btn";
import Text from "../../assets/Text";

export default function Step(param) {
    return (
        <div id="Step" style={{width:param.width,display:'inline-block',padding:"1vw",margin:"2vw 6.3vw",
        boxShadow:(param.shadow)?"rgb(14 119 255 / 15%) 0vw 0vw 6vw":"none"}}>

            <Btn text={param.btn_text} style={param.btn_style}/>
            <Text text={param.heading_text} text_style={param.heading_style}/>
            <div style={{width:"5vw",background:"#0E77FF",height:".5vw",borderRadius:".5vw"}}></div>
            <Text text={param.text} text_style={param.text_style}/>

        </div>

    )
}
