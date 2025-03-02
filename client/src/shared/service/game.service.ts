import { baseApi } from "../../api/game.api";
import { IGame, IGames } from "../types/game.interface";
export interface IGameQuery {
  category?: string | null;
  platform?: string | null;
  sortBy?: string | null;
}

export const gamesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<IGames[], IGameQuery | void>({
      query: ({ category, platform, sortBy } = {}) => {
        const params = new URLSearchParams();
        if (platform) params.append("platform", platform);
        if (category) params.append("category", category);
        if (sortBy) params.append("sort-by", sortBy);
        return `/games?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Games" as const, id })),
              "Games",
            ]
          : ["Games"],
    }),
    getGame: builder.query<IGame, number>({
      query: (id) => `/game?id=${id}`,
      providesTags: (result, error, id) => [{ type: "Games", id }],
    }),
  }),
  overrideExisting: true,
});
export const { useGetGamesQuery, useGetGameQuery } = gamesApi;
