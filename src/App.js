import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./redux/usersSlice";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeflex/primeflex.css';
import "./App.css";

import { InputText } from "primereact/inputtext";

import { Button } from "primereact/button";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [changeTheme, setChangeTheme] = useState(false);
  const handleChangeADD = () => {
    const newUser = {
      id: users.length + 1,
      name: name,
      role: role,
    };
    dispatch(addUser(newUser));
    setName("");
    setRole("");
  };
  const handleChangeDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const ChangeTheme = () => {
    setChangeTheme(!changeTheme);
  };

  return (
    <div
      className="App m-5"
      style={{ backgroundColor: changeTheme ? "#222" : "#fff" }}
    >
      <h1>User List</h1>

      <InputText
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mr-2"
      />
      <InputText
        placeholder="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="mr-2"
      />
      <Button
        label="Add User"
        onClick={() => handleChangeADD()}
        severity="secondary"
      />
      {users.length === 0 ? (
        <p>No user Found </p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.id}-{user.name} {user.role}
              <Button onClick={() => handleChangeDelete(user.id)} size="small" className="ml-2" severity="danger">
                Delete User
              </Button>
            </li>
          ))}
        </ul>
      )}
      <p>Quantity:{users.length}</p>
      <Button onClick={() => ChangeTheme()}>switch mode</Button>
    </div>
  );
}

export default App; 
