import React, { Component } from 'react';
import '../css/style.css';
import '../css/responsive.css';
import Arya from '../img/Arya.jpeg'

class Body extends React.Component {
    render() { 
        return (
        <div id="maincontent">
            <img src={Arya}></img>
            <h1>Aryasatya Tridaya Alam</h1>
            <h3 id="desc">Web Dev/Game Dev/Content Creator from Cibinong, <strong>West Java, Indonesia</strong></h3>
            <div id="desc2">
                <h3>Hello, welcome to my bio </h3>
            </div>
        </div>);
    }
}
 
export default Body;