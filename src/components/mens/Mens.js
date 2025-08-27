import React from 'react'
import data from "../../mockData/items.json"; 
import ItemList from "../itemList/ItemList";

function Mens() {
  console.log("data",data)
  const maleProducts = data.filter(item => item.gender === "male");

  return (
    <section>
      <ItemList items={maleProducts} />
    </section>
  )
}

export default Mens