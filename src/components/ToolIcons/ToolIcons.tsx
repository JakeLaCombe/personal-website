import python from "../../assets/python.png";
import aws from "../../assets/aws.png";
import nodejs from "../../assets/node_js.png";
import openai from "../../assets/openai.png";
import typescript from "../../assets/typescript.png";
import { AppContainer } from "../AppContainer/AppContainer";

export const ToolIcons = () => {
  return (
    <div style={{ marginTop: "4em" }}>
      <AppContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={aws} width="256" height="100"></img>
          <img src={nodejs} width="150" height="100"></img>
          <img src={openai} width="100" height="100"></img>
          <img src={typescript} width="100" height="100"></img>
          <img src={python} width="100" height="100"></img>
        </div>
      </AppContainer>
    </div>
  );
};
