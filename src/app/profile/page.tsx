"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  __v: number;
}

const Profile = () => {
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
    console.log(users, "im users");
  }, [users]);
  async function fetchUsers() {
    try {
      const response = await fetch("api/users/getusers");
      const data = await response.json();
      setUsers(data);
      console.log(response, "im response");
      console.log(data, "im data");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>user List</h1>
      {users.map((user: User) => {
        if (user.username === 'mohamad') {
          return <h1 key={user._id}>Hello, Mohamad!</h1>;
        } else {
          return (
            <div key={user._id}>
              <p>{user.username}</p>
              <p>{user.email}</p>
            </div>
          );
        }
      })}
      
    </div>
  );
};

export default Profile;
