import React from "react";
// import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = (props) => {
    return (
        <div >
            <li className="list-item">
               {props.item}
               <div className="icons">
               <span>
                    <i className="icon-delete" onClick={e => {
                        props.deleteItem(props.index);
                    }}>{<DeleteIcon/>}</i>
                </span>
                </div>   
                         
            </li> 

        </div>
    );
}
export default Item;