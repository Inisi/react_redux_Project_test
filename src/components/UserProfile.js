import classes from "./UserProfile.module.css";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const show = useSelector((state) => state.auth.isAuthenticated);
  return (
    show && (
      <main className={classes.profile}>
        <h2>My User Profile</h2>
      </main>
    )
  );
};

export default UserProfile;
