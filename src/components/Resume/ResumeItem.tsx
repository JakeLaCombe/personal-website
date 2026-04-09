interface Props {
  company: string;
  dates: string;
  achievements: string[];
  img: string;
  imgWidth: number;
  imgHeight: number;
}

export const ResumeItem = ({
  company,
  dates,
  achievements,
  img,
  imgWidth,
  imgHeight,
}: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={img}
        width={imgWidth}
        height={imgHeight}
        style={{ position: "absolute", right: 0 }}
      />
      <h1>{company}</h1>
      <h2>{dates}</h2>
      <hr />
      <h3>Achievements:</h3>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};
