import {React} from "react";
import Text from "../../assets/Text";
import Studies from './studies';
import Case1 from "../../assets/case1.png";
import Case2 from "../../assets/case2.png";
import Case3 from "../../assets/case3.png";
import Btn from "../../assets/round_btn";


export default function Case(param) {
    return (
        <div id="Case"  >

            <Text text="Case Studies" text_style={{fontSize:"3vw", fontFamily:"sans-serif", fontWeight:'bold',display:"block", width:"20vw",margin:"5vw auto 0"}}/>

            <Text text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant." text_style={{fontSize:"1vw", fontFamily:"sans-serif", fontWeight:'500',display:"block", width:"45vw",margin:"2vw auto"}}/>
            <div>

                <div style={{display:"inline-block",width:"max-content",margin:"0 5vw"}}>
                    <Studies width="26vw"  shadow={false}
                    path={Case1} btn_style={{width:"15vw",color:"#0E77FF",background:"#16B2FF17",borderRadius:"2vw",display:"block",border:"none"}}
                    
                    heading_text="Isomorphic Web App" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}
                    
                    text="Getting involved matters. Crucial causes to the if ever, come from passive action." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
                    <Studies width="26vw" shadow={true}
                    path={Case2} btn_style={{width:"15vw",color:"white",background:"#0E77FF",borderRadius:"2vw",display:"block",border:"none"}}
                    
                    heading_text="Isomorphic Web App" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}
                    
                    text="Getting involved matters. Crucial causes to the if ever, come from passive action." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
                    <Studies width="26vw" shadow={false}
                    path={Case3} btn_style={{width:"15vw",color:"#0E77FF",background:"#16B2FF17",borderRadius:"2vw",display:"block",border:"none"}}
                    
                    heading_text="Isomorphic Web App" heading_style={{fontSize:"2vw", fontWeight:"bold", fontFamily:"sans-serif"}}
                    
                    text="Getting involved matters. Crucial causes to the if ever, come from passive action." text_style={{fontSize:"1vw", fontWeight:"500",fontFamily:"sans-serif"}}/>
                </div>
                <Btn text="View All" style={{width:"fit-content",borderRadius:"2vw",padding:".5vw 2vw", margin:"0 46vw"}}/>    
            </div>

        </div>


    )
}

