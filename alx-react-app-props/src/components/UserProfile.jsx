import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = UserContext(useContext)
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;