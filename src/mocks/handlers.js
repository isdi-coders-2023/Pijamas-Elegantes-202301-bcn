import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL_API_PATH;

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
            genres: [],
            name: "Minecraft",
            platforms: [],
            rating: 2,
            released: "",
          },
          {
            id: 2,
            added_by_status: {
              playing: 10000000,
            },
            background_image: "",
            genres: [],
            name: "League Of Legends",
            platforms: [],
            rating: 1,
            released: "",
          },
        ],
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}`, (req, rest, ctx) => {
    return rest(ctx.status(500), ctx.json(null));
  }),
];
