import { ButtonHTMLAttributes } from "react";

type Props = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: Props) {
  return (
    <button
      data-testid="button"
      {...rest}
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#B6E06B",
        color: "#222222",
      }}
    >
      {children}
    </button>
  );
}
