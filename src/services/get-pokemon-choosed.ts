import { toast } from "react-toastify";

export async function getPokemonChoosed(url: string) {
    const data = await fetch(url);
    const pokemon = await data.json();
    if (!pokemon?.sprites.other.home.front_default) {
      toast.error("Esse Pokemon não tem imagem no nosso banco de dados!", {
        toastId: "error-pokemon",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    return pokemon;
  }