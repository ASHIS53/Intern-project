import React, { useState, useEffect } from "react";

const EditUserForm = ({ user, updateUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [firstName, lastName] = name.split(" ");
    updateUser({
      ...user,
      firstName: firstName || "",
      lastName: lastName || "",
      email,
    });
  };

  return (
    <div className="edit-form">
      <h2>Edit User</h2>
      <div className="user-avatar">
        <img src={user.image} alt="User Avatar" className="avatar-large" />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserForm;
