import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const EditUserForm = () => {
  const { selectedUser, updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setName(`${selectedUser.firstName} ${selectedUser.lastName}`);
      setEmail(selectedUser.email);
    }
  }, [selectedUser]);

  const validateForm = () => {
    let errors = {};
    if (!name.trim()) errors.name = "Name cannot be empty.";
    if (!email.trim()) {
      errors.email = "Email cannot be empty.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email format.";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const [firstName, lastName] = name.split(" ");
    updateUser({
      ...selectedUser,
      firstName: firstName || "",
      lastName: lastName || "",
      email,
    });
  };

  if (!selectedUser) return <p>Select a user to edit</p>;

  return (
    <div className="edit-form">
      <h2>Edit User</h2>
      <div className="user-avatar">
        <img
          src={selectedUser.image}
          alt="User Avatar"
          className="avatar-large"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUserForm;
