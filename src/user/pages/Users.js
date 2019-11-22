import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Random-Name",
      image:
        "https://images.pexels.com/photos/2755165/pexels-photo-2755165.jpeg?cs=srgb&dl=photo-of-woman-wearing-yellow-jacket-2755165.jpg&fm=jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
