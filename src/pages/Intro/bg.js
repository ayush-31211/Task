import React from 'react';
import Btn from '../../assets/round_btn';

function Nav(param)
{
    return (
        <div style={{display:'inline-block', width:'max-content',padding:'1vw',position:"relative",top:"-88vw",margin:"0 15vw"}}>
            <div style={{display:'inline-block', width:'max-content'}}>
                
            <Btn text="Logo" style={{border:"none",fontWeight:"500",fontSize:"1.5vw",padding:"0 1vw",width:"max-content",textAlign:"center", color:'white'}}/>
            </div>
            <div style={{display:'inline-block', width:'max-content',paddingBottom:".3vw", paddingLeft:"23vw"}}>
            <Btn text="About" style={{border:"none",padding:"0.5vw 1.2vw",width:"max-content",textAlign:"center", color:"white"}}/>
            <Btn text="Service" style={{border:"none",padding:"0.5vw 1.2vw",width:"max-content",textAlign:"center", color:"white"}}/>
            <Btn text="Case Studies" style={{border:"none",padding:"0.5vw 1.2vw",width:"max-content",textAlign:"center", color:"white"}}/>
            <Btn text="Testimonials" style={{border:"none",padding:"0.5vw 1.2vw",width:"max-content",textAlign:"center", color:'white'}}/>
            <Btn text="Contact" style={{border:"none",padding:"0.5vw 1.2vw",width:"max-content",textAlign:"center", color:"white"}}/>
            <Btn text="Login" style={{border:"none",padding:"0.5vw 2vw",width:"max-content",textAlign:"center",background:"white",color:"black"}}/>

            </div>
        </div>

    )
}
export default Nav;