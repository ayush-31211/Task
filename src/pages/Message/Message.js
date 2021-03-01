import {React} from "react";
import { Down, Facebook, Instagram, Msgblu, Recp, Twitter } from "../../assets/Ellipse";
import Text from "../../assets/Text";
import Form from "./form";
import Step from './step';
import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';
import email from '../../assets/email.svg';


export default function Case(param) {
    return (
        <div style={{display: "flex",overflow: "hidden",width: "100vw",flexWrap: "wrap",height: "140vh"}}>
            <Msgblu style={{width: "100vw",position: "relative",top: "15vw",background: "white"}}/>
            <Down id="CaseTri" style={{width: "10vw",display: "inline-flex",position: "relative",top: "-59vw",height: "10vw",left: "20vw"}}/>
            <div id="CaseRecForm" style={{display: "flex",position: "relative",top: "-52vw"}}>
                <Recp style={{width: "70vw",display: "inline-block",position: "relative"}} id="Rec"/>
                <Form id="Msg" />
            </div>
            <div style={{display:"inline-block",width:"min-content",position:"relative",top:"-50vw",left:"6vw"}}>
            <Text text="Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo consequat." text_style={{color:'white',fontFamily:'sans-serif',fontSize:".8vw",display:"inline-block",width:'26vw',}} />
            <Facebook style={{width:"1.5vw",display:"inline-block", margin:".2vw", cursor:"pointer"}}/>
            <Twitter style={{width:"1.5vw",display:"inline-block", margin:".2vw", cursor:"pointer"}}/>
            <Instagram style={{width:"1.5vw",display:"inline-block",border:"2px solid white",borderRadius:"50%",background:"#0E77FF", margin:".2vw", cursor:"pointer"}}/>
            </div>
            <Step
                style={{width:"18vw",display:"inline-block",position:"relative",top:"-54vw",left:"12vw"}}
                heading_text="Our Services"
                heading_style={{color:"white",fontSize:"2vw",fontWeight:"bold", fontFamily:"sans-serif"}}
                img_style={{display:"none", cursor:"pointer"}}
                text_style={{color:"white",fontSize:".9vw",fontFamily:"sans-serif",cursor:"pointer"}}
                arr={[{text:'Web Development'},{text:'Mobile Development'},{text:'Cloud Technologies'},{text:'UI/UX Design'}]}
                div_style={{margin:"1vw 0"}}
            />
            
            <Step
                style={{width:"18vw",display:"inline-block",position:"relative",top:"-54vw",left:"12vw"}}
                heading_text="Our Links"
                heading_style={{color:"white",fontSize:"2vw",fontWeight:"bold", fontFamily:"sans-serif"}}
                img_style={{display:"none", cursor:"pointer"}}
                text_style={{color:"white",fontSize:".9vw",fontFamily:"sans-serif",cursor:"pointer"}}
                arr={[{text:'Terms & Conditions'},{text:'Privacy Policy'},{text:'Imprint'},{text:'Legal'}]}
                div_style={{margin:"1vw 0"}}
            />
            
            <Step
                style={{width:"18vw",display:"inline-block",position:"relative",top:"-54vw",left:"12vw"}}
                heading_text="Our Services"
                heading_style={{color:"white",fontSize:"2vw",fontWeight:"bold", fontFamily:"sans-serif"}}
                img_style={{display:"inline-block",width:"2vw",marginRight:"1vw", cursor:"pointer"}}
                text_style={{color:"white",fontSize:".9vw",fontFamily:"sans-serif",cursor:"pointer",width:"15vw",display:"inline-block"}}
                arr={[{img:location,text:'Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.'},{img:phone,text:'00 1800 245 453'},{img:email,text:'hello@inkyy.com'}]}
                div_style={{margin:"1vw 0",width:"19vw",display:"flex"}}
                
            />
            
            

        </div>


    )
}

