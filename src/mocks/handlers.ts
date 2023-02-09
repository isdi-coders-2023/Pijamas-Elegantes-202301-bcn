import { rest } from "msw";

const apiUrl = "https://api.rawg.io/api/games?";

export const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        next: "",
        previous: "",
        results: [
          {
            id: 1,
            added_by_status: {
              playing: 140,
            },
            background_image: "",
            genres: [
              {
                name: "action",
              },
            ],
            name: "Minecraft",
            platforms: [
              {
                name: "PlayStation 4",
              },
            ],
            rating: 2,
            released: "",
          },
          {
            id: 2,
            added_by_status: {
              playing: 10000000,
            },
            background_image: "",
            genres: [
              {
                name: "action",
              },
            ],
            name: "League Of Legends",
            platforms: [
              {
                name: "PlayStation 4",
              },
            ],
            rating: 1,
            released: "",
          },
        ],
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}`, (_req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
