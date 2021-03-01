import React from 'react';
import {G35604} from "./Ellipse"
export default function CheckBox(param)
{
    console.log(param);
    return (
    <div style={{margin:".5vw 0"}}>
        <G35604 style={param.arr_style}/>
            <span style={param.text_style}>{param.text}</span>
            </div>
    )
}
// {display: "inline-block", width: "1.8vw", position: "relative", top: "-0.2vw"}
// {fontSize:"1.4vw", fontWeight:"700"}