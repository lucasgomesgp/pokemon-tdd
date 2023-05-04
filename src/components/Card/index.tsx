import { InfoArea } from "../InfoArea";
import { CardProps } from "./types";

export function Card({
  title,
  type,
  strength,
  weight,
  skill,
  speed,
  url,
}: CardProps) {
  const infosOfPokemons = [
    {
      title: "Strength",
      value: strength,
    },
    {
      title: "Speed",
      value: speed,
    },
    {
      title: "Weight",
      value: weight,
    },
    {
      title: "Skill",
      value: skill,
    },
  ];
  return (
    <div className="flex flex-col">
      <div>
        <img src={url} alt={title} data-testid="img-pokemon"/>
      </div>
      <div className="flex">
        <h3>{title}</h3>
        <p>{type}</p>
      </div>

      <div className="flex flex-col">
        {infosOfPokemons.map((info) => (
          <InfoArea
            key={info.title}
            title={info.title}
            fillingNumberOfBorder={info.value}
          />
        ))}
      </div>
      
    </div>
  );
}
