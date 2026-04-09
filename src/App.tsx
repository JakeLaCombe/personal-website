import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Footer } from "./components/Footer/Footer";
import { Nav } from "./components/Nav/Nav";

function App() {
  return (
    <main className={styles.mainBody}>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
