import React from 'react';
import {G35626} from './Ellipse'
import Text from './Text';
export default function ArrHeading(param)
{
    console.log(param)
    return (
    <>
        <G35626 style={param.arr_style}/>
        <Text text_style={param.text_style} text={param.text}/>
    </>
    )
}
// {display: "inline-block", width: "1.8vw", position: "relative", top: "-0.2vw"}
// {fontSize:"1.4vw", fontWeight:"700"}