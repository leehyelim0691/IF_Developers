import '../css/Start.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, FormGroup, Label, Col, Row, View, Input} from 'reactstrap';
import React,{ useState, useEffect, useRef} from 'react';
import {
    Link
    } from 'react-router-dom'
// import start from './../../public/start.png'


function Start() {

  return (
      <div className = "form">
         <div className = "header">
            <p className = "header1">Engineering Project</p>
            <div className = "menu">
                <p className = "menu1"><u>Docs</u></p>
                <p className = "menu2"><u>Showcase</u></p>
            </div>
         </div>
         <div className = "body">
             <div className = "body_content"><h1>Creating Forms,<br/>Various Layouts</h1></div>
             <h6><i>User friendly UIUX<br/>Low or no coding<br/>Fast, Productive and Flexible</i></h6>
         </div>
         <div className = "data">
             <div className = "data_title"><p>[Your data]</p></div>
             <div className = "data_content"><p>Name<br/>Age<br/>Sex<br/>School<br/>Experience<br/>Hobby<br/>Strength<br/>.<br/>.<br/>.</p></div>
         </div>
         <Link to="/form"><button className="main_btn" type="submit">Get Started</button></Link>
      </div>
  );
}

export default Start;