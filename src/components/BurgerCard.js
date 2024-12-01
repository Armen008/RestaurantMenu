import React, { useState } from "react";
import "./menu.css";
import BAR from "../images/BAR.png"
import BURGER from "../images/BURGER.png"


function BurgerCard({basketElements,setBasketElements,title,price,item,setselectedBurger,selectedBurger}){
   const [count, SetCount]= useState(0);

    

    
   let MinusCounter = () => {

    if(count > 0){
        SetCount (count -1)
    }else if(count <=0){
        SetCount(0)

    }


   }


   let PlusCounter = () =>{
    SetCount(count +1)
 }

let addItems =() =>{
    setBasketElements((prev)=>prev+count)
    setselectedBurger((prev)=>[...prev,item])
    console.log(selectedBurger,"set")

}





    return (
        <div>
           

           <div className="Burger-card">
            <button className="but4">RECOMMENDED</button>
<img className="img7" src={BURGER}></img>

<div className="Radius-But">
    <button className="but5"><p className="p18">{price}</p></button>
</div>
<p className="p19">{title}</p>
<p className="p20">Максимально толстый <br></br>
слой мяса</p>
<div className="display-cont">
    <button className="but7" onClick={MinusCounter}>-</button>
    <p className="p23">{count}</p>
    <button className="but7" onClick={PlusCounter}>+</button>
    <button className="but8" onClick={addItems}>ADD</button>
</div>
<button className="but6">ЗАКАЗАТЬ</button>

           </div>



            </div>
        
    )
}


export default BurgerCard