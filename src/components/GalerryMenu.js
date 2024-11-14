import React from "react";
import "./menu.css";
import SALAT from "../images/SALAT.png"
import COFFEE from "../images/COFFEE.png"
import SOUP from "../images/SOUP.png"







function GaleryMenu(){
    return(
        <div>
    
<span className="span4"><p className="p24">Галерея</p>   <p className="p25">Блюд</p>  </span>
    <div className="Galerry-cont">

      <div>
        <img className="img8" src={SALAT}></img>

        <div className="small-cont">
          <img className="img9" src={COFFEE}></img>
          <img  className="img10" src={SOUP}></img>
        </div>
      </div>



      <div>
       
        <div className="small-cont2">
          <img className="img9" src={COFFEE}></img>
          <img  className="img10" src={SOUP}></img>
        </div>

        <img className="img11" src={SALAT}></img>

      </div>


    </div>














        </div>
    )
}


export default GaleryMenu