import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
const TodoInput = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <h3 style={{fontWeight:"bold",color:'#0013F8', padding:"20px"}}>My Todo </h3>
            <div className="row px-5">
                <div className="container d-flex">
                     <input
                     placeholder="Input task then click add"
                     onChange={(e) => setName(e.target.value)}
                     value={name}
                      type="text" className="form-control" name="" id=""/>
                    <button
                    onClick={() =>{
                        if( name == ''){
                            alert('Pleace Input Task')
                        }else{
                            dispatch( addTodo(
                                {
                                    id: uuid(),
                                    name: name
                                }
                             ));
                                setName('');
                            }
                        }
                    }
                    className="btn-primary w-25">ADD</button>
                </div>
            </div>

        </div>
    );
};

export default TodoInput;