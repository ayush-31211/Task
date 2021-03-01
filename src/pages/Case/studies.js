import {React} from "react";
import Text from "../../assets/Text";

export default function Studies(param) {
    return (
        <div id="Studies" style={{width:param.width,display:'inline-block',padding:"1vw",margin:"2vw 2vw",
        boxShadow:(param.shadow)?"rgb(14 119 255 / 15%) 0vw 0vw 6vw":"none"}}>

            <img src={param.path} alt='Union' style={param.btn_style}/> 
            <Text text={param.heading_text} text_style={param.heading_style}/>
            <div></div>
            <Text text={param.text} text_style={param.text_style}/>
            <div style={{color:"#0E77FF",height:"2vw",borderRadius:".5vw",margin:"1vw 0"}}>Read More</div>
        </div>

    )
}
