import clsx from "clsx";

export function getColorOfProgressbar(fillNumber: number, type: string) {
  const fillBackground = `w-[${fillNumber}%]`;
  console.log(fillBackground)
  return clsx(`h-[100%] rounded-xl transition-all ${fillBackground}`, {
    "bg-normal": type == "normal",
    "bg-fire": type == "fire",
    "bg-water": type == "water",
    "bg-grass": type == "grass",
    "bg-electric": type == "electric",
    "bg-ice": type == "ice",
    "bg-fighting": type == "fighting",
    "bg-poison": type == "poison",
    "bg-ground": type == "ground",
    "bg-flying": type == "flying",
    "bg-psychic": type == "psychic",
    "bg-bug": type == "bug",
    "bg-rock": type == "rock",
    "bg-ghost": type == "ghost",
    "bg-dark": type == "dark",
    "bg-dragon": type == "dragon",
    "bg-steel": type == "steel",
    "bg-fairy": type == "fairy",
  });
}
