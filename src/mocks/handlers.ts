import { rest } from "msw";
import { baseURL } from "../utils/base-url";
import { pokemon, urlsPokemons } from "./pokemon-data";

export const handlers = [
  rest.get(`${baseURL}/pokemon`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(urlsPokemons));
  }),
  rest.get(`${baseURL}/pokemon/:id`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(pokemon));
  }),
];
