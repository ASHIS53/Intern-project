import React, { useState } from "react";

const UserList = ({ users, setSelectedUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      <input
        type="text"
        placeholder="Search here ..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>MEMBER</th>
            <th>ROLE</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} onClick={() => setSelectedUser(user)}>
              <td>
                <img src={user.image} alt={user.firstName} className="avatar" />
                <span>
                  {user.firstName} {user.lastName}
                </span>
                <br />
                <span className="email">{user.email}</span>
              </td>
              <td>
                <button className="role-btn">Admin</button>
              </td>
              <td>
                <button className="remove-btn">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
