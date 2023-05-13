import clsx from "clsx";

export function getColorOfType(type: string){
    return clsx("w-10 h-10 p-2 rounded-full shadow-lg",{
        "bg-normal shadow-normal": type == "normal",
        "bg-fire shadow-fire": type == "fire",
        "bg-water shadow-water": type == "water",
        "bg-grass shadow-grass": type == "grass",
        "bg-electric shadow-electric": type == "electric",
        "bg-ice shadow-ice": type == "ice",
        "bg-fighting shadow-fighting": type == "fighting",
        "bg-poison shadow-poison": type == "poison",
        "bg-ground shadow-ground": type == "ground",
        "bg-flying shadow-flying": type == "flying",
        "bg-psychic shadow-psychic": type == "psychic",
        "bg-bug shadow-bug": type == "bug",
        "bg-rock shadow-rock": type == "rock",
        "bg-ghost shadow-ghost": type == "ghost",
        "bg-dark shadow-dark": type == "dark",
        "bg-dragon shadow-dragon": type == "dragon",
        "bg-steel shadow-steel": type == "steel",
        "bg-fairy shadow-fairy": type == "fairy",
    });
}