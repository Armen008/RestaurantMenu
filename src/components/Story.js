import React from "react";
import "./menu.css";
import CAKE from "../images/CAKE.png"
import DECOR from "../images/DECOR.png"
import SALAT from "../images/SALAT.png"
import BG from "../images/BG.png"
import PIZZA from "../images/PIZZA.png"
import HAMBURGER from "../images/HAMBURGER.png"


function Story() {
  return (
    <div>
    <div className="BigCont">
      <div className="Texts">
        <span className="span2">
          {" "}
          <p className="p7">Наша</p>
          <p className="p8">История</p>
        </span>
        <p className="p9">
          Как и у любого другого самобытного места, у нас есть<br></br> своя, особая
          история. Идея ресторана пришла <br></br>основателям неожиданно. Во время
          прогулки по лесу <br></br>создатель нашего ресторана застрял в сотнях<br></br>
          километров от ближайшего населенного пункта. Вдали<br></br> от цивилизации и
          связи им пришлось навремя <br></br>обустровать себе нехитрый быт, добывать и
          готовить<br></br> себе еду.
        </p>

<div className="NumTex">
<div className="numbers">
    <p>93</p>
    <p>206</p>
    <p>71</p>
</div>

<div className="texts">
    <p>Напитки</p>
    <p className="p10">Еда</p>
    <p className="p11">Закуски</p>
</div>

</div>
      </div>


<div className="images">
    <div className="design-box"></div>
    <img className="img2" src={CAKE}></img>
    <img className="img3" src={DECOR}></img>
    <img className="img4" src={SALAT}></img>

</div>




    </div>


<div className="BG-img">
<div>
  <p className="p12">Отпразднуйте в одном из <br></br>самых лучших ресторанов.</p>
  <p className="p13">Только в этом месяце бизнес-ланч от 250 ₽</p></div>
</div>

<button className="but3">ЗАКАЗ СТОЛИКА</button>




</div>


  );
}

export default Story;
