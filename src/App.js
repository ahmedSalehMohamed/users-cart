import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "./redux/addListAction";

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
      className="App"
      style={{ backgroundColor: changeTheme ? "#222" : "#fff" }}
    >
      <h1>User List</h1>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={() => handleChangeADD()}>Add User</button>
      {users.length === 0 ? (
        <p>No user Found </p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id}-{user.name} {user.role}
              <button onClick={() => handleChangeDelete(user.id)}>
                Delete User
              </button>
            </li>
          ))}
        </ul>
      )}
      <p>Quantity:{users.length}</p>
      <button onClick={() => ChangeTheme()}>switch mode</button>
    </div>
  );
}

export default App;
