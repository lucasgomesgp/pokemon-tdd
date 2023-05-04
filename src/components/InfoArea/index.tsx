import { InfoAreaProps } from "./types";

export function InfoArea({ title, fillingNumberOfBorder }: InfoAreaProps) {
  return (
    <div className="flex gap-2">
      <p>{title}</p>
      <div className="border"></div>
    </div>
  );
}
