import { rest } from "msw";
import { games } from "../store";

const apiUrl = "https://api.rawg.io/api/games?";

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
];

export const errorHandlers = [
  rest.get(`${apiUrl}`, (_req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
