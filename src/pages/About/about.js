import React from 'react';
import {G35699,G35698,G35650} from '../../assets/Ellipse';
import ArrHeading from '../../assets/heading';
import RoundBtn from '../../assets/round_btn';
import Text from '../../assets/Text';


function About(param)
{
    return (<div style={{background:'white'}} id="About" className="flex">
        <G35699 style={{position:'relative',width:"60vw", left:"-25vw"}}/>
        <G35698 style={{position:'relative',width:"20vw", left:"23vw", top:"-14vw"}}/>
        <div style={{position:'relative', left:"-30vw", top:"15vw",display:"inline-block"}}>
            <ArrHeading text='ABOUT US' text_style={{fontSize:"1.4vw", fontWeight:"700"}} arr_style={{display: "inline-block", width: "1.8vw", position: "relative", top: "-0.2vw"}}/>
            <Text text="Great Digital Agency" text_style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"2vw",display:"block"}}/>
            <Text text="Our products are fully custom-made, built with the latest technologies and cloud-architectures." text_style={{fontFamily:"sans-serif",width:"24vw",fontWeight:"600",fontSize:"1vw",display:"block",margin:"1vw 0"}}/>
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue. Quisque blandit dui Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In convallis porta mauris non aliquam." text_style={{fontFamily:"sans-serif",width:"26vw",fontSize:".9vw",display:"block",margin:"1vw 0"}}/>
            <RoundBtn text="Get Started>>" style={{width: "fit-content", borderRadius: "2vw", padding:" .6vw 1vw"}}/>
        </div>
        <G35650 style={{width:"20vw",position:"relative", left:"-93vw", top:"18vw"}}/>
        </div>
    )
}
export default About;


