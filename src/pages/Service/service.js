import React from 'react';
import { G35621} from '../../assets/Ellipse';
import Btn from '../../assets/round_btn';
import ArrHeading from "../../assets/heading"
import CheckBox from "../../assets/checkbox"


function Service(param)
{
    return (<div style={{background:'white'}} id="Service"  className="flex">
                <div style={{display:"inline-block", width:"26vw",position:'relative',top:'15vw',left:'10vw'}} >
                    <ArrHeading text="OUR SERVICES" arr_style={{width:"2vw"}} text_style={{fontWeight:"bold",fontSize:"1.5  vw"}} />
                    <h2 style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"2vw", width:"24vw"}}>Transforming your ideas into Reality</h2>
                        
                    <div id='btn_grp'>
                        <Btn text="Web Development" style={{width:'fit-content', background:"#16B2FF17",border:"none", margin:'1vw', borderRadius:'1vw', fontFamily:'Poppins',display:"inline-block"}}/>
                        <Btn text="Mobile Development" style={{width:'fit-content', background:"#16B2FF17",border:"none", margin:'1vw', borderRadius:'1vw', fontFamily:'Poppins',display:"inline-block"}}/>
                        <Btn text="UI/UX Designing" style={{width:'fit-content', background:"#0E77FF", color:'white',border:"none", margin:'1vw', borderRadius:'1vw', fontFamily:'Poppins',display:"inline-block"}}/>
                        <Btn text="Branding" style={{width:'fit-content', background:"#16B2FF17",border:"none", margin:'1vw', borderRadius:'1vw', fontFamily:'Poppins',display:"inline-block"}}/>
                        <Btn text="Cloud Technology"  style={{borderRadius:'1vw',width:'fit-content', background:"#16B2FF17",border:"none", margin:'1vw', fontFamily:'Poppins',display:"inline-block"}}/>
                    </div>
                </div>
                <div id="UIUX">
                   <div style={{width:'36vw',boxShadow:"0vw 0vw 6vw #0e77ff26",display:'inline-flex',flexDirection:"column", alignItems:"start",  padding: "1vw"
   }}>
                        <div>
                        <G35621 style={{width:'4vw',display:"inline-block"}}/>
                        <span style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"2vw",margin:'0 1vw'}}>UI/UX Designing</span>
                        </div>
                        <p style={{width: "34vw", fontSize:" 1.1vw", padding: "1vw 0"}}> 
                        Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
                        </p>
                        <div id='checkbox'>
                            <CheckBox arr_style={{width:"2vw", marginRight:".5vw"}} text_style={{fontSize:"1vw", fontFamily:"sans-serif"}} text="Lorem ipsum dolor sit amet, conse ctetur adipi scing elit."/>
                            <CheckBox arr_style={{width:"2vw", marginRight:".5vw"}} text_style={{fontSize:"1vw", fontFamily:"sans-serif"}} text="Lorem ipsum dolor sit amet,"/>
                            <CheckBox arr_style={{width:"2vw", marginRight:".5vw"}} text_style={{fontSize:"1vw", fontFamily:"sans-serif"}} text="conse ctetur adipi scing elit."/>
                            <CheckBox arr_style={{width:"2vw", marginRight:".5vw"}} text_style={{fontSize:"1vw", fontFamily:"sans-serif"}} text="Lorem ipsum dolor sit amet, conse ctetur"/>
                        </div>
                   </div>
                    {/* <div>
                        Shadow
                    </div> */}
                </div>
                    <div id="UIUX_blue"></div>
        </div>
    )
}
export default Service;


