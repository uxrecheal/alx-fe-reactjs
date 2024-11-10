import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = UserContext(useContext)
    return (
      <div>
        <h2>{userData.name}</h2>
        <p>Age: {userData.age}</p>
        <p>Bio: {userData.bio}</p>
      </div>
    );
  };

  export default UserProfile;