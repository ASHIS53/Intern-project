import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSelectedUser(updatedUser);
  };

  return (
    <div className="container">
      <div className="dashboard">
        <UserList users={users} setSelectedUser={setSelectedUser} />
        {selectedUser && (
          <EditUserForm user={selectedUser} updateUser={updateUser} />
        )}
      </div>
    </div>
  );
};

export default App;
