import React, { useState, useEffect } from "react";

import "./Users.css"; // Importing the CSS

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-container">
      <h2 className="users-heading">👥 Our Users</h2>
      <input
        type="text"
        className="search-input"
        placeholder="🔍 Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="users-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
                <img
                  src={`https://robohash.org/${user.id}?size=60x60`}
                  alt={user.name}
                  className="user-avatar"
                />
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-email">{user.email}</span>
              </div>
            </li>
          ))
        ) : (
          <p className="no-users">🚫 No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default Users;
