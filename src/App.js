
import './App.css';

import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Todo from './components/Todo/Todo';
export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState([])

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
   <Router>
    <Switch>
         <PrivateRoute path="/todo">
            <Todo></Todo>
          </PrivateRoute>

      <Route exact path='/'>
              <Login/>
         </Route>
      <Route exact path='/login'>
              <Login/>
         </Route>
         <Route  path="*">
           <h1 className="text-center">Page Not Found</h1>
         </Route>
    </Switch>
       
   </Router>
     
      </UserContext.Provider>
  );
}

export default App;
