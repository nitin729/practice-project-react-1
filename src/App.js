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
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <DisplayUser users={usersList} />
    </div>
  );
}

export default App;
