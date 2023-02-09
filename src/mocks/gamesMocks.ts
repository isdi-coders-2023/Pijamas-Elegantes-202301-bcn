import { rest } from "msw";
import { ApiResponseStructure } from "../data/types";
import { setupServer } from "msw/node";

const fakeApiResponseBody: ApiResponseStructure = {
  next: "",
  previous: "",
  results: [
    {
      id: 1,
      name: "GTA V",
      released: "",
      background_image: "GTA V",
      rating: 5,
      genres: [
        {
          name: "action",
        },
      ],
      added_by_status: {
        playing: 150,
      },
      platforms: [
        {
          name: "PlayStation 4",
        },
      ],
    },
    {
      id: 2,
      name: "Portal 2",
      released: "",
      background_image: "Portal 2",
      rating: 5,
      genres: [
        {
          name: "action",
        },
      ],
      added_by_status: {
        playing: 300,
      },
      platforms: [
        {
          name: "PlayStation 4",
        },
      ],
    },
  ],
};

export const fetchGames_response = rest.get(
  process.env.REACT_APP_URL_API!,
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeApiResponseBody));
  }
);

const handlers = [fetchGames_response];

export const mswServer = setupServer(...handlers);
