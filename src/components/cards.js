import React from "react";
import "./menu.css"
import CardLogo from "../images/CardLogo.png"




function Cards(props){
    return(
        <div className="CardsDiv">
    <div className="card">
        <img className="card-logo" src={CardLogo}></img>
<span className="span1"><p className="p4">{props.title1}</p><p className="p5">{props.title2}</p></span>
<p className="p6">{props.text}</p>
</div>
    </div>)
}
export default Cards;