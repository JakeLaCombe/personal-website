import styles from "./App.module.css";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Nav } from "./components/Nav/Nav";

import { AppContainer } from "./components/AppContainer/AppContainer";
import { Profile } from "./components/Profile/Profile";
import { ToolIcons } from "./components/ToolIcons/ToolIcons";

function App() {
  return (
    <main className={styles.mainBody}>
      <Nav />
      <Hero>
        <AppContainer>
          <Profile />
        </AppContainer>
      </Hero>
      <ToolIcons />

      <Footer></Footer>
    </main>
  );
}

export default App;
