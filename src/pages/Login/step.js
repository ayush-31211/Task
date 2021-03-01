import {React} from "react";
import Text from "../../assets/Text";

export default function Step(param) {
    return (
        <div style={param.style}>

            <Text text={param.heading_text} text_style={param.heading_style}/>
            <div style={{width:"5vw",background:"#21B3FF",height:".5vw",borderRadius:".5vw"}}></div>
            {param.arr.map((val,index)=>{
                return <div style={param.div_style}>
                <img src={val.img} alt="Union" style={param.img_style}/>
                <Text key={index} text={val.text} text_style={param.text_style}/>
                </div>
            })}
        </div>

    )
}

