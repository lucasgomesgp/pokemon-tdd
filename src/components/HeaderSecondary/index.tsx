import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function HeaderSecondary() {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-red-600 w-full">
      <Link to="/" className="cursor-pointer" data-testid="arrow-back">
        <ArrowLeft size={28} color="#FFFFFF" weight="bold" />
      </Link>
      <Link to="/" className="cursor-pointer" data-testid="logo-back">
        <img src="/logo.svg" alt="PokeAPI logo" className="max-w-[10rem]" />
      </Link>
      <div />
    </header>
  );
}
