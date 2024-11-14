import React from "react";
import "./menu.css";


import PIZZA from "../images/PIZZA.png"
import HAMBURGER from "../images/HAMBURGER.png"




function BurgerParts(){
    return(
    <div>





<span className="span3"><p className="p14">Наши</p>   <p className="p15">Блюда</p></span>



<div className="Dis-Burg">
  <div>

    <img className="img5" src={PIZZA}></img>
  </div>


  <div className="Hamburger">
<div className="Dis-Hum">
  <img className="img6" src={HAMBURGER}></img>
  <p className="p16">Гамбургер мини --------------------------- 220 ₽</p>
</div>



<div className="Dis-Hum">
  <img className="img6" src={HAMBURGER}></img>
  <p className="p16">Гамбургер мини --------------------------- 220 ₽</p>
</div>




<div className="Dis-Hum">
  <img className="img6" src={HAMBURGER}></img>
  <p className="p16">Гамбургер мини --------------------------- 220 ₽</p>
</div>

  </div>

</div>








    </div>

    )
}

export default BurgerParts