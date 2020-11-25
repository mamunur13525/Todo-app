import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const TodoItem = ({ todo }) => {
     const [editable, setEditable] = useState(false);
     const [name, setName] =useState(todo.name);
    let dispatch = useDispatch();
    return (
        <div>
        
            <div style={{borderTop:'1px solid #0000004f',borderBottom:'1px solid #0000004f',    margin: '0px 10px'}} className="row text-center d-flex justify-content-between px-3 ">

    
                <div className="d-flex  mt-3">
                <div className="font-weight-bold mt-1 mr-1">*</div>
                    {editable ? <input type = 'text'
                     className="form-control"
                     onChange={
                         (e) => setName(e.target.value)
                     }
                     defaultValue={name}
                      /> : <h5>{todo.name}</h5>}
                  
                    </div>
               <div>
               <button 
                onClick={()=>{
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name
                        }
                    ));
                    if( editable){
                        setName(todo.name);
                    }
                    setEditable(!editable); 
                   
                }}
               className="btn btn-primary m-2">
                   {editable ? "Update" : <FontAwesomeIcon icon={faEdit} /> }</button>
                <button onClick={()=> dispatch(deleteTodo(todo.id))} className="btn-danger  btn m-2"><FontAwesomeIcon icon={faTimes} /> </button>
               </div>

            </div>
        </div>
    );
};

export default TodoItem;