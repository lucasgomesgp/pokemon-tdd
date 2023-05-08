import clsx from "clsx";

export function getColorOfPokemonCircle(type: string){
    return clsx({
        "fill-normal": type == "normal",
        "fill-fire": type == "fire",
        "fill-water": type == "water",
        "fill-grass": type == "grass",
        "fill-electric": type == "electric",
        "fill-ice": type == "ice",
        "fill-fighting": type == "fighting",
        "fill-poison": type == "poison",
        "fill-ground": type == "ground",
        "fill-flying": type == "flying",
        "fill-psychic": type == "psychic",
        "fill-bug": type == "bug",
        "fill-rock": type == "rock",
        "fill-ghost": type == "ghost",
        "fill-dark": type == "dark",
        "fill-dragon": type == "dragon",
        "fill-steel": type == "steel",
        "fill-fairy": type == "fairy",
        }
       )

}