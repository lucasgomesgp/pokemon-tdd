import clsx from "clsx";

export function getColorOfIdPokemon(type: string, toggleClickFlex: boolean) {
  return clsx("absolute top-2 text-2xl font-bold", {
    "left-4": toggleClickFlex === false,
    "left-2 text-4xl top-4": toggleClickFlex,
    "text-normal": type == "normal",
    "text-fire": type == "fire",
    "text-water": type == "water",
    "text-grass": type == "grass",
    "text-electric": type == "electric",
    "text-ice": type == "ice",
    "text-fighting": type == "fighting",
    "text-poison": type == "poison",
    "text-ground": type == "ground",
    "text-flying": type == "flying",
    "text-psychic": type == "psychic",
    "text-bug": type == "bug",
    "text-rock": type == "rock",
    "text-ghost": type == "ghost",
    "text-dark": type == "dark",
    "text-dragon": type == "dragon",
    "text-steel": type == "steel",
    "text-fairy": type == "fairy",
  });
}
