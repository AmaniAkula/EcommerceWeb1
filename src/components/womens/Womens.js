import React from 'react'
import data from "../../mockData/items.json"; 
import ItemList from "../itemList/ItemList";

function Womens() {
  console.log("data",data)
  const femaleProducts = data.filter(item => item.gender === "female");

  return (
    <section>
      <ItemList items={femaleProducts} />
    </section>
  )
}

export default Womens