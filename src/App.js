import React from "react";
import UserList from "./components/UserList";
import EditUserForm from "./components/EditUserForm";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div className="container">
        <div className="dashboard">
          <UserList />
          <EditUserForm />
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
