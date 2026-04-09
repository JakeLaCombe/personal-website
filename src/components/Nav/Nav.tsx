import { Link } from "react-router-dom";
import { AppContainer } from "../AppContainer/AppContainer";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <AppContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/" className={`${styles.link} ${styles.logo}`}>
            Jake LaCombe
          </Link>
          <Link
            style={{ marginLeft: "auto" }}
            to="/resume"
            className={styles.link}
          >
            Resume
          </Link>
          <Link to="/projects" className={styles.link}>
            Projects
          </Link>
        </div>
      </AppContainer>
    </nav>
  );
};
