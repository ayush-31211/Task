import React from 'react';
import {Ellipse,P37488, P37501, Web,P37458, P37459, Uniontxt, P37482, P37484, P37486, P37502, P37490} from '../../assets/Ellipse';
import Btn from '../../assets/round_btn';
import Rocket from '../../assets/Union_1.svg';
import Nav from './bg';

function Intro(param)
{
    return (<div style={{height:"64vw", overflow:"hidden"}}>
        <div id='Union'  style={{flexFlow:"wrap"}} className="flex">
        
        <img src={Rocket} alt="Union" style={{width:"100vw",height:"100%", margin:`${16}vw ${0}% ${0}% ${0}% `}}/>
                <Ellipse style={{display: "inline-block", position: "relative", top: `${-38}vw`, left: `${67}vw`, width: `${4}vw`, height: `${4}vw`}}/>
                <P37488 style={{position: "relative",top: "-57vw", opacity: .5, width: "20vw", left: "59vw",}}/>
                <P37501 style={{position: "relative",top: "-47vw", opacity: .5, width: "15vw", left: "65vw",}}/>
                <Web style={{position: "relative",top: "-51vw", width: "25vw", left: "-24vw",height:"fit-content"}}/>
                <Uniontxt style={{position: "relative",top: "-59vw", width: "40vw", left: "15vw",height:"fit-content"}}/>
                <Btn style={{background:"white",color:"black",width:"max-content",position:"relative", borderRadius:"2vw", fontSize:"1vw", padding:"1vw 2vw", top:"-54vw",height:"fit-content",left:"-25vw"}} text="Get Started »"/>
                <P37458 style={{position: "relative",top: "-41vw", opacity: 1, width: "2vw", left: "35vw",}}/>
                <P37458 style={{position: "relative",top: "-35vw", opacity: .5, width: "1vw", left: "23vw",}}/>
                <P37488 style={{position: "relative",top: "-37vw", width: "9vw", left: "24vw",}}/>
                <P37459 style={{position: "relative",top: "-65vw", width: "3vw", left: "21vw",}}/>
                <P37482 style={{position: "relative",top: "-68vw", width: "3vw", left: "-3vw",}}/>
                <P37484 style={{position: "relative",top: "-60vw", width: "3vw", left: "-9vw",}}/>
                <P37486 style={{position: "relative",top: "-74vw", width: "3vw", left: "-14vw",}}/>
                <P37502 style={{position: "relative",top: "-70vw", width: "2vw", left: "-23vw",}}/>
                <P37484 style={{position: "relative",top: "-47vw", width: "3vw", left: "-29vw",}}/>
                <P37502 style={{position: "relative",top: "-42vw", width: "11vw", left: "-45vw",}}/>
                <P37490 style={{position: "relative",top: "-62vw", width: "5vw", left: "-37vw",}}/>

                <P37490 style={{position: "relative",top: "-50vw", width: "5vw", left: "-17vw",}}/>  
                <Nav/>          
        </div>
        </div>
    )
}
export default Intro;