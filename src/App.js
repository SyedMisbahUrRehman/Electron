import React, { useState } from 'react';
import './App.css';
// import html2canvas from 'html2canvas';



function App() {

  // State Hook - `useState`
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // Helper Functions

  /* Adds a new item to the list array*/
  function addItem() {

    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    // Add new item to items array
    setItems(oldList => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  /* Deletes an item based on the `item.id` key */
  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

// const CaptureImage=()=>{
//   html2canvas(document.body).then(function(canvas){
//     var a=document.createElement('a')
//     a.href=canvas.toDataURL()
//     a.download="screenshot";
//     a.click();
//   })
// }



  // Main part of app
  return (
    
    <div className="app">
      {/* 1. Header  */}
      <h2>Todo List</h2>

      {/* 2. Add new item (input) */}
      <input 
       type='text'
       placeholder='Add an item...'
       value={newItem}
       onChange={e => setNewItem(e.target.value)}
      >
       
   
      </input>
      

      {/* Add (button) */}
      <button onClick={() => addItem()}>
        Add
      </button>
      {/* <button className="btn-btn-info" id="button" onClick={CaptureImage} >Take screenshot</button> */}
    


      {/* 3. List of todos (unordered list) */}
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}  <button className='delete-button' onClick={() => deleteItem(item.id)}>Remove</button></li>
          )
        })}
      </ul>



    </div>




    
  );
}

export default App;