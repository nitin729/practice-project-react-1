import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import DisplayUser from "./components/Users/DisplayUsers";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (userId) => {
    setUsersList((prevUsersList) => {
      return prevUsersList.filter((user) => user.id !== userId);
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <DisplayUser users={usersList} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
