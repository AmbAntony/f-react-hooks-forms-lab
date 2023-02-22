import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
    const [formEntry, setFormEntry] = useState({
      name: " ",
      category: "Produce",
    });
  

function handleNewItem(event) {
      setFormEntry({
        ...formEntry,
        [event.target.name]: event.target.value,
      });
    }
  
    function handleNewItemSubmit(event) {
      event.preventDefault();
      onItemFormSubmit({
        id: uuid(),
        ...formEntry
      });
    }
 

  return (
    <form className="NewItem" onSubmit={handleNewItemSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formEntry.name} onChange={handleNewItem}/>
      </label>

      <label>
        Category:
        <select name="category"  onChange={handleNewItem} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm; 