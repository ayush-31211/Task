import {React} from "react";
import { Dual, G35648, G35649, Pic, ReactLogo } from "../../assets/Ellipse";
import ArrHeading from "../../assets/heading";
import Text from "../../assets/Text";


export default function Customer(param) {
    return (
         <div id="Customer" style={{width:"100vw",display:"flex"}} >

            <div style={{overflow:"hidden"}}>
                <div style={{background:"#0E77FF",width:"max-content",display:"inline-block"}}>
                    <Pic style={{width: "25vw",border: "3vw solid white",borderRadius: "50%",display: "inline-flex",verticalAlign: "text-top",position:"relative",top:"-5vw",left:"6vw",margin:"4vw"}}/>
                    <G35648 style={{width:'15vw', position:"relative", left:"3vw", top:"-9vw"}}/>        
                </div>

                <div style={{display:" inline-block",width: "max-content",height:" max-content",position: "relative",top: "-10vw",left: "6vw"}}>
                    <ArrHeading text='SELECTED CUSTOMERS' text_style={{fontSize:"1.4vw", fontWeight:"700",color:"#0E77FF"}} arr_style={{display: "inline-block", width: "1.8vw", position: "relative", top: "-0.2vw"}}/>
                    <Text text='Check what our client say about us' text_style={{fontSize:"2vw", fontWeight:"700",display:"block",width:"21vw"}}/>
                    <Text text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam.' text_style={{fontSize:"1.1vw", fontWeight:"400",display:"block",width:"33vw",padding:"1vw 0"}}/>
                    <ReactLogo style={{width:"5vw",display:"block",margin:"1vw 0"}}/>
                    <Dual style={{width:"8vw"}}/>
                </div>

                    <G35649 style={{left: "82vw",width: "30vw",position: "relative",top: "-7vw", margin:"-8vw 0"}}/>

                </div>
         </div>
    )
}

