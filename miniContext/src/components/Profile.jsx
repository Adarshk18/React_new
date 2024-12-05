import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
  const { user } = useContext(userContext); // Access user data from context

  if (!user) return <div>Please login</div>;

  return <div>Welcome, {user.username}!</div>;
}

export default Profile;
