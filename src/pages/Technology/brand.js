import React from 'react';
import AmazonBlue from '../../assets/Brands/AmazonBlue.svg'
import AmazonWhite from '../../assets/Brands/AmazonWhite.svg'
import Cloud from '../../assets/Brands/cloud.svg'
import Fire from '../../assets/Brands/fire.svg'
import JS from '../../assets/Brands/js.svg'
import Node from '../../assets/Brands/Node.svg'
import ReactLogo from '../../assets/Brands/React.svg'
import Redux from '../../assets/Brands/redux.svg'
import SF from '../../assets/Brands/sf.svg'

export default function Brand(param) {
    return (
    <>
    <div style={{margin:"0 auto",width:"70vw"}}>
        <div className="brand">
            <img src={ReactLogo} alt="ReactLogo" style={{}}/>
        </div>
        
        <div className="brand" style={{background:"#0E77FF"}}>
            <img src={AmazonWhite} alt="AmazonWhite" />
        </div>
        
        <div className="brand">
            <img src={Cloud} alt="Cloud" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={Redux} alt="Redux" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={JS} alt="JS" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={SF} alt="SF" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={AmazonBlue} alt="AmazonBlue" style={{}}/>
        </div>
    </div>

    <div style={{margin:"0 auto",width:"60vw"}}>
        <div className="brand">
            <img src={SF} alt="SF" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={Redux} alt="Redux" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={Node} alt="Node" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={Fire} alt="Fire" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={ReactLogo} alt="React" style={{}}/>
        </div>
        
        <div className="brand">
            <img src={JS} alt="JS" style={{}}/>
        </div>
         
    </div>
    </>
    )
    
}