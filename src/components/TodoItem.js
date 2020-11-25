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
        
            <div style={{border:'1px solid #0000004f',paddingTop:'15px'}} className="row text-center d-flex justify-content-between px-5 ">
              {/* <div>#{todo.id.length >1?todo.id[2] :todo.id }</div> */}
    
                <div className="d-flex">
                <div className="font-weight-bold mt-2 mr-1">*</div>
                    {editable ? <input type = 'text'
                     className="form-control"
                     onChange={
                         (e) => setName(e.target.value)
                     }
                     defaultValue={name}
                      /> : <h4>{todo.name}</h4>}
                  
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