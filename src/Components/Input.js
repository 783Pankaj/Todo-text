import React, { useState } from "react";
import Item from "./Item";


const Input = () => {
    const [text, setText] = useState();
    const [submitTodo, setSubmitTodo] = useState([]);
    // const [store, setStore] = useState([]);

    const submiFun = () => {
        setSubmitTodo([...submitTodo, text]);
        setText('');
    }
    const deleteItem = (key)=>{
        let newTodo= [...submitTodo];
        newTodo.splice(key,1)
        setSubmitTodo([...newTodo])
    }
    console.log(submitTodo);
    console.log(text);
    
    
    return (
        <div >
            <input type="text"
             className="input-box-todo"
                placeholder="enter your todo"
                value={text}
                onChange={(e) => { setText(e.target.value) }}
            />
            <button type="submit" className="add-btn"  onClick={submiFun}>+</button>
            <h1 className='app-heading'>TODO List</h1>
              <hr/>  

            <div>
                {submitTodo.map((listItem,i) => {
                     return (
                        <Item
                            key={i}
                            index={i}
                            item={listItem}
                            deleteItem={deleteItem}
                            
                            // val = {submitTodo}
                        />
                        
                     )
                })}

            </div>
        </div>
    );
}
export default Input;