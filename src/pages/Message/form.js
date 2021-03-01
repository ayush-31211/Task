import {React} from "react";
import Text from "../../assets/Text";
import Btn from "../../assets/round_btn";

export default function Form(param) {
    return (
        <div id="Form">
            <div id="Inp" style={{boxShadow: "rgb(14 119 255 / 15%) 0vw 0vw 6vw",   display: "inline-block",  width: "fit-content",background:"white",padding:"2vw 1vw",margin:"4vw"}}>
                <Text text="Send Us message" text_style={{fontSize:"2vw",fontWeight:"bold",fontFamily:"sans-serif"}} />
                <input required type="e-mail" name="email" placeholder="Your Email*"></input>
                <input required type="text"  name="name" placeholder="Your Name*"></input>
                <input required type="number"  name="number" placeholder="Phone Number*"></input>
                <input required type="text"  name="subject" placeholder="Subject*"></input>
                <label for="message" id="message">Your Message</label>
                <input required  type="text" name="message"></input>
                <div required style={{width: "max-content",display: "flex"}}>
                    <input required style={{  display: "inline",  width: "2vw"}} name="tc" type="checkbox" id="chbox"></input>
                    <label style={{width: "23vw",display: "inline-block"} }for="tc">By sending this message, you confirm that you have read and agreed to our privacy-policy.</label>
                </div>
                <Btn text="Get Started" style={{background:"#0E77FF",color:"white",width:"fit-content",borderRadius:"2vw",padding:".5vw 2vw", margin:"1vw auto"}}/>    
                


            </div>

        </div>


    )
}

