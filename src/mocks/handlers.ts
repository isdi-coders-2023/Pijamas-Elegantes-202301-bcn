import { rest } from "msw";
import { games, gameDetail } from "../store";

const apiUrl =
  "https://api.rawg.io/api/games?key=193c87522b9048baab524e2b193817dd";
const apiDetailsUrl =
  "https://api.rawg.io/api/games/3939?key=193c87522b9048baab524e2b193817dd";

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        next: "",
        previous: "",
        results: games,
      })
    );
  }),

  rest.get(`${apiDetailsUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(gameDetail));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}`, (_req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),

  rest.get(`${apiDetailsUrl}`, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json(null));
  }),
];
