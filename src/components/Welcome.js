import React from "react";
import "./menu.css";
import Menu from "./menu";
import Cards from "./cards";


function Welcome() {
  return (
    <div>
      <Menu></Menu>

      <div style={{ display: "flex", gap: "40px", background: "#f2efef" }}>
        <Cards
          title1="Магическая"
          title2="Атмосфера"
          text="В нашем заведении царит магическая атмосфера
наполненная вкусными ароматами"
        ></Cards>

        <Cards
          title1="Лучшее качество "
          title2="Еды"
          text="Качество нашей Еды - отменное!"
        ></Cards>

        <Cards
          title1="Недорогая"
          title2="Еда"
          text="Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!"
        ></Cards>
      </div>
    </div>
  );
}
export default Welcome;
