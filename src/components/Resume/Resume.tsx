import { AppContainer } from "../AppContainer/AppContainer";
import { ResumeItem } from "./ResumeItem";
import Crema from "../../assets/crema.png";
import Cerner from "../../assets/cerner.png";
import Garmin from "../../assets/garmin.png";

export const Resume = () => {
  return (
    <AppContainer>
      <div style={{ padding: 10 }} />
      <ResumeItem
        company="Crema"
        dates="April 2019 - Present"
        achievements={[
          "Created a JAM Stack app with Ruby on Rails and React to help organizations evaluate performance",
          "Maintained and added new features to a frontend app that assists organizations in structuring their organizations",
          "Created a GIS Application for Diode to assist in land acquisition with tools such as OpenLayers and PostGIS",
          "Created an application to assist large organizations in budget planning for projects",
          "Created a Lab Project that helped users log and share coffee recipes",
          "Built games and applications with the use of WebXR Tools such as BabylonJS",
          "Mentored junior associates into becoming successful software engineers",
        ]}
        img={Crema}
        imgWidth={80}
        imgHeight={80}
      />
      <div style={{ padding: 10 }} />
      <ResumeItem
        company="Cerner Corporation"
        dates="June 2013 - April 2019"
        achievements={[
          "Create applications using Ruby on Rails to help doctors evaluate patient performance",
          "Implemented Applications to ensure cross platform EHR inoperability using FHIR standards",
          "Mentored new graduates into becoming successful entry career software engineers",
          "One of the lead senior developers in creating an open source UI framework Terra",
          "Led company wide initiatives in creating accessibility principles and implementations for our applications",
        ]}
        img={Cerner}
        imgWidth={160}
        imgHeight={100}
      />
      <div style={{ padding: 10 }} />
      <ResumeItem
        company="Garmin"
        dates="May 2012 - April 2013"
        achievements={[
          "Worked on UI framework used on Garmin's devices from GPS to Marine",
          "Improved image resource application by adding support for color pickers and new XML Format",
        ]}
        img={Garmin}
        imgWidth={188}
        imgHeight={50}
      />
      <div style={{ padding: 10 }} />
    </AppContainer>
  );
};
