import { AppContainer } from "../components/AppContainer/AppContainer";
import { Hero } from "../components/Hero/Hero";
import { Profile } from "../components/Profile/Profile";
import { ToolIcons } from "../components/ToolIcons/ToolIcons";

export function Home() {
  return (
    <>
      <Hero>
        <AppContainer>
          <Profile />
        </AppContainer>
      </Hero>
      <ToolIcons />
    </>
  );
}
