import React from "react";
import "./menu.css";
import BurgerCard from "./BurgerCard";
import MAN from "../images/MAN.png"
import GaleryMenu from "./GalerryMenu";
import OurChef from "./OurChef";



function OurMenu({basketElements,setBasketElements,burgerCardData,selectedBurger,setselectedBurger}){
    console.log(burgerCardData)
    return (
        <div>
            <div className="Burger-Img">
           <p className="p17">Наше меню</p>

<div style={{display: "flex",gap: "60px",}}>
          {/* <BurgerCard
          sale="400" size="Гамбургер мини" basketElements={basketElements} setBasketElements={setBasketElements}></BurgerCard>
                  <BurgerCard
          sale="500"  size="Гамбургер мини"  basketElements={basketElements} setBasketElements={setBasketElements}></BurgerCard>
                  <BurgerCard
          sale="600"  size="Гамбургер макси"  basketElements={basketElements} setBasketElements={setBasketElements}></BurgerCard> */}
{
    burgerCardData.map((item)=>{
        return <BurgerCard title={item.title} price={item.price} item={item} basketElements={basketElements} setBasketElements={setBasketElements} selectedBurger={selectedBurger} setselectedBurger={setselectedBurger}></BurgerCard>
        
    })
}
</div>

            </div>



<div className="Com-cont">
    <p className="p21">Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной<br></br>
     Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем<br></br>
      рекомендовать этот ресторан своим друзьям и родственникам также за рубежом,<br></br>
       путешествующих в Санкт-Петербург!!!</p>

       <img className="man-img" src={MAN}></img>
       <p className="p22">Посетитель<br></br>Николай</p>
</div>

<GaleryMenu></GaleryMenu>
<OurChef/>

        </div>
    )
}

export default OurMenu;