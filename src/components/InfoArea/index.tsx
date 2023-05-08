import { InfoAreaProps } from "./types";

export function InfoArea({ title, fillingNumberOfBorder }: InfoAreaProps) {
  return (
    <div className="flex justify-between items-center gap-2 w-[100%]">
      <p className="font-roboto text-lg">{title}</p>
    <div className="border w-40 h-3 bg-white rounded-xl"></div>
    </div>
  );
}
