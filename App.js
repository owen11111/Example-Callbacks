import { useState } from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard.js';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {/* We are able to pass in a "stateful setter" in order to
      allow the child component to manipulate parent element stateful 
      objects */}
      {!user ? 
      (
        <Login verifyLoggedIn={setUser}/>
      ) 
      : 
      (
        <Dashboard user={user} />
      )
      }
      


      
    </div>
  );
}

export default App;


