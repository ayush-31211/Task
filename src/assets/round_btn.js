import React from 'react';
import {Button} from 'react-bootstrap';

export default function Btn(param)
{
    return (
        <Button variant="outline-primary" style={param.style}>{param.text}</Button>
    )
} 