import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item"


function ShoppingList({ items , onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filter, setFilter] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(e) {
        
    setFilter(e.target.value)
  }
 

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  const searchItems = itemsToDisplay.filter((item) => item.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter search={filter} onSearchChange={handleSearch} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {searchItems.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
  }


export default ShoppingList;
