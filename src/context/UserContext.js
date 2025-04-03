import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setSelectedUser(updatedUser);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        selectedUser,
        setSelectedUser,
        updateUser,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
