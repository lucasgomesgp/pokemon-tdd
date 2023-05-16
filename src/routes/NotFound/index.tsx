import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-8">
      <p>Infelizmente sua página não existe :(</p>
      <img className="max-w-md" src="/empty.svg" alt="Página não encontrada" />
      <p className="font-bold">
        Para voltar para página inicial{" "}
        <Link to="/" className="text-blue-950">
          clique aqui
        </Link>
      </p>
    </div>
  );
}
