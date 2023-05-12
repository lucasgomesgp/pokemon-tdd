import clsx from "clsx";
import { getColorOfProgressbar } from "../../utils/get-color-of-progressbar";
import { InfoAreaProps } from "./types";

export function InfoArea({ title, fillingNumberOfBorder, type }: InfoAreaProps) {
  return (
    <div className="flex justify-between items-center gap-2 w-[100%]">
      <p className={clsx("font-roboto text-lg",{
        "uppercase": title === "hp",
        "capitalize": title !== "hp",
      })}>{title}</p>
      <div className="border-2 w-40 h-3 bg-white rounded-xl">
      <div className={getColorOfProgressbar(fillingNumberOfBorder, type)} />
      </div>
    </div>
  );
}
