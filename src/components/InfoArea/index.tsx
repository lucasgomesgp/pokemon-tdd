import clsx from "clsx";
import { getColorOfProgressbar } from "../../utils/get-color-of-progressbar";
import { InfoAreaProps } from "./types";

export function InfoArea({
  title,
  fillingNumberOfBorder,
  type,
}: InfoAreaProps) {
  const fillColorOfDiv = fillingNumberOfBorder > 100 ? 100 : fillingNumberOfBorder;
  return (
    <div className="flex justify-between items-center gap-2 w-[100%] ">
      <p
        className={clsx("font-roboto text-lg font-bold", {
          uppercase: title === "hp",
          capitalize: title !== "hp",
        })}
      >
        {title}
      </p>
      <div className="border-2 w-60 h-8 bg-gray-300 rounded-xl relative font-poppins">
        <div className={getColorOfProgressbar(type)} style={{width: `${fillColorOfDiv}%`}}>
          <p className="text-slate-900  font-bold absolute ml-0 mr-0 left-[40%]">
            {fillingNumberOfBorder > 100 ? 100 : fillingNumberOfBorder}%
          </p>
        </div>
      </div>
    </div>
  );
}
