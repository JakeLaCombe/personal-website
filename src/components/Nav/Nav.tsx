import { AppContainer } from "../AppContainer/AppContainer";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <AppContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a className={`${styles.link} ${styles.logo}`}>Jake LaCombe</a>
          <a className={`${styles.link} ${styles.rightSide}`}>About</a>
          <a className={styles.link}>Resume</a>
          <a className={styles.link}>Projects</a>
        </div>
      </AppContainer>
    </nav>
  );
};
