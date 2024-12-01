import React, { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Story from "./components/Story";
import OurMenu from "./components/OurMenu";


function App() {
  const [selectedBurger, setselectedBurger]=useState([])
  const [burgerCardData, setBurgerCardData]=useState([
    {
title:"Burger Mini",price: 400,recomended:true,img: "images/BURGER.png"
},


{
  title:"Burger Medium",price:500,recomended:false,img: "images/BURGER.png"
},
{
  title:"Burger Maxi",price:600,recomended:false,img: "images/BURGER.png"
}
])
const [basketElements, setBasketElements]=useState(0);



  return (
    <div className="App">
    <Welcome basketElements={basketElements} setselectedBurger={setselectedBurger} selectedBurger={selectedBurger}/>
    <Story/>
    <OurMenu  selectedBurger={selectedBurger} setselectedBurger={setselectedBurger} burgerCardData={burgerCardData} basketElements={basketElements} setBasketElements={setBasketElements}/>
    </div>
  );
}

export default App;