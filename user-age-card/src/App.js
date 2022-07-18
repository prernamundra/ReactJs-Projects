import React, { useState } from 'react';
import AddUsers from "./componenets/Users/AddUsers";
import UsersList from "./componenets/Users/UsersList";
function App() {
  const [usersList,  setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>
 {
  setUsersList((prevUserList)=>{
    return [...prevUserList, {name: uName, age:uAge, id: Math.random().toString()}];
  });
 };
  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler}/>
       <UsersList users={usersList} />
        
      
    </div>
  );
}

export default App;
