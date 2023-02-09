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
            gameImage: "",
            currentPlayers: 150,
            genre: "Action",
            gameName: "GTA V",
            rating: 4.5,
          },
          {
            gameImage: "",
            currentPlayers: 5,
            genre: "Adventure",
            gameName: "Minecraft",
            rating: 1,
          },
        ],
      })
    );
  }),
];
