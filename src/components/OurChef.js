import React from "react";
import "./menu.css";
import WOMAN from "../images/WOMAN.png"
import MEN from "../images/MEN.png"
import BOY from "../images/BOY.png"
import LAST from "../images/LAST.png"





function OurChef (){
return(
    <div>


<span className="span5">
    
    <p className="p26">Наши</p>
    <p className="p27">Повара</p>

</span>

<div className="Dis-Chef">

<img src={WOMAN}></img>
<img src={MEN}></img>
<img src={BOY}></img>




</div>




<img className="last-img" src={LAST}></img>




    </div>
)
}

export default OurChef;