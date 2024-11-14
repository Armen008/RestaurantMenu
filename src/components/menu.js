import React, { useState } from "react";
import "./menu.css"
import LOGO from "../images/LOGO.png"
import HERO from "../images/Hero.png"
import CART1 from "../images/CART1.png"
import PHONE from "../images/PHONE.png"



function Menu(){

    const[popup, SetPopup] = useState(false);

    let HandlePopup = () => {
        if(popup){
         SetPopup(!popup)
        }else{
SetPopup(true)
        }
    }








    return(
        <div className="bigImg">
            <header>
            <img className="logo" src={LOGO}></img>

            <ul className="ul1">
                <li><p>ГЛАВНАЯ</p></li>
                <li><p>МЕНЮ</p></li>
                <li><p>О НАС</p></li>
                <li><p>БРОНЬ</p></li>
                <li><img className="img1" src={CART1} onClick={HandlePopup}></img></li>

            </ul>
       {popup ? <div className="popupdiv"></div> : null}
            <div className="line1"></div>

            <div>
                <div className="contact">
                    <img src={PHONE}></img>
                    <p>+999-888-76-54</p>
                </div>
                <p className="p1">Свяжитесь с нами для <br></br>бронирования</p>
            </div>

            <button className="but1">ЗАКАЗ СТОЛИКА</button>
            </header>


            <div>
                <p className="p2">Добро пожаловать в</p>
                <p className="p3">Наш ресторан</p>
                <div className="DisCont"><div></div><p>ДОМ ЛУЧШЕЙ ЕДЫ</p><div></div></div>

                <button className="but2">VIEW MENU</button>
            </div>
        </div>
    )
}


export default Menu