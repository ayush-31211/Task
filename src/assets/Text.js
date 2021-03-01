import React from 'react';
export default function Text(param)
{
    return (
        <span style={param.text_style}>{param.text}</span>
    )
}