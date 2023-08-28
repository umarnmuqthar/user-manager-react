import { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/AddUser/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (username, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { username, age, id: Math.random().toString() }];
    });
  };
  return (
    <div className="app">
      <AddUser onAddUser={addUserHandler} />

      {userList.length > 0 && <UserList users={userList} />}

  
    </div>
  );
}

export default App;
