import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

const Todo = () => {
    const [loggedIn, setLoggedIn] = useContext(UserContext)
    return (
        <div>
                {
                    loggedIn.email && <div style={{marginTop:'40px',textAlign:'center'}}><img style={{    borderRadius: '50px'}} src={loggedIn.photoURL} alt="photo"/> <h4>{loggedIn.displayName}</h4></div>
                  }

                  <div className="box">
                    <TodoInput />
                    <TodoList />
                    </div>
                    <div>
                    
                  

                  </div>
        </div>
    );
};

export default Todo;