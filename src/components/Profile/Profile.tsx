import profile from "../../assets/Profile.png";
import styles from "./Profile.module.css";

export const Profile = () => {
  return (
    <div style={{ display: "flex", padding: "2rem 0" }}>
      <img
        className={styles.profileImg}
        src={profile}
        width="200"
        height="200"
      />
      <div className={styles.profileContent}>
        <h1>Hello!</h1>
        <p>
          I'm a developer from Kansas City Missouri! My specialties are in
          Frontend Development, UX, Backend, AI, and GIS Systems. I also love to
          work on games and art projects as well!
        </p>
      </div>
    </div>
  );
};
