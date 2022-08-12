import React, { useState} from "react";
import Todoslist from "./Todoslist";


const App = () => {
 const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

 const itemEvent = (event) => {
      setInputList(event.target.value);
 };

 const listOfItems = () => {
     setItems((oldItems) =>  {
       return [...oldItems, inputList];
     });
     
 };

 const deleteItems = (id) =>{
  console.log("deleted")

setItems((oldItems) => {
  return oldItems.filter((arrElem, index) => {
     return index !== id;
  })
})

}

  return (
    <div classname="main_div">
      <div classname="center_div">
        <br />
        <h1>Todos-list With Adrees</h1>
        <br />
        <input 
        type="text"
         placeholder="add a Items"
          onChange={itemEvent}
          />
        <button onClick={listOfItems}> + </button>

    <ol>
      <br />
     

      {Items.map( (itemval, index) => {
        return <Todoslist key={index}
        id={index}
         text={itemval}
         onSelect = {deleteItems}
          />
      })}

    </ol>
      </div>
    </div>

  );
}

export default App;
