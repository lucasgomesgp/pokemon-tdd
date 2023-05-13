import clsx from "clsx";

export function getColorOfIdPokemon(type: string) {
  return clsx("absolute left-2 top-2 text-2xl font-bold", {
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
