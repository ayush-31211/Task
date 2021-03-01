import {React} from "react";
import { G35700 } from "../../assets/Ellipse";
import Text from "../../assets/Text";
import Brand from "./brand";
import ButtonGrp from "./buttongrp";

export default function Tech(param) {
    return (
         <div id="Tech" style={{paddingBottom:"15vw"}}>
            <G35700 style={{width:"25vw",position:"relative",left:"-5vw"}}/>
             <Text text="Core Technologies" 
             text_style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"3vw",position:'relative',width:'30vw',top:'-5vw', display:'flex',margin:'0 auto'}}/>
             <Text text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." 
             text_style={{fontFamily:"sans-serif",fontWeight:"500",fontSize:"1vw",position:'relative',width:'44vw',top:'-5vw', display:'flex',margin:'0 auto'}}/>
             <ButtonGrp/>
             <Brand/>
         </div>
    )
}