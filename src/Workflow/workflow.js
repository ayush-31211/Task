import {React} from "react";
import Text from "../assets/Text";
import Step from './step';

export default function Work(param) {
    return (
        <div id="Work" style={{paddingBottom:"10vw"}}>
            <Text text="Workflow" text_style={{fontSize:"3vw", fontFamily:"sans-serif", fontWeight:'bold',display:"block", width:"15vw",margin:"10vw auto 0"}}/>

            <Text text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." text_style={{fontSize:"1vw", fontFamily:"sans-serif", fontWeight:'500',display:"block", width:"45vw",margin:"2vw auto"}}/>
            <div style={{margin:"5vw 0"}}>
                
            <Step width="20vw"  shadow={false}
            btn_text="Step 1" btn_style={{width:"7vw",color:"#0E77FF",background:"#16B2FF17",borderRadius:"2vw",display:"block",border:"none"}}

            heading_text="Send your brief" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}

            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
            <Step width="20vw" shadow={true}
            btn_text="Step 2" btn_style={{width:"7vw",color:"white",background:"#0E77FF",borderRadius:"2vw",display:"block",border:"none"}}

            heading_text="Wait for delivery" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}

            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
            <Step width="20vw" shadow={false}
            btn_text="Step 3" btn_style={{width:"7vw",color:"#0E77FF",background:"#16B2FF17",borderRadius:"2vw",display:"block",border:"none"}}

            heading_text="Get your files!" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}

            text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
            
            </div>

        </div>
    )
}