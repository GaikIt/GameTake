import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import FreeGameCard from "./freeGameCard/FreeGameCard";
import { gamesApi } from "../../shared/service/game.service";
import { NavLink, useSearchParams } from "react-router-dom";
import { setFilter } from "../../store/filterSlice";
import { useAppDispatch } from "../../store/store";
import { IGames } from "@/shared/types/game.interface";

export default function FreeGame() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const platform = searchParams.get("platform") || "";
  const sortBy = searchParams.get("sort-by") || "";
  const dispatch = useAppDispatch();
  const { data: games, isLoading } = gamesApi.useGetGamesQuery({
    category,
    platform,
    sortBy,
  });

  if (isLoading || !games) {
    return <div className="text-white">Loading...</div>;
  }

  const handleUpdateFilter = (value: string, key: string) => {
    const newParams = Object.fromEntries(searchParams.entries());

    if (value) {
      newParams[key] = value;
    }

    setSearchParams(newParams);
    dispatch(setFilter({ key, value }));
  };

  return (
    <div className="p-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="space-y-4">
            <div className="text-white">Platform:</div>
            <Select
              onValueChange={(value) => handleUpdateFilter(value, "platform")}
              value={platform}
            >
              <SelectTrigger className="w-full bg-gray-800 text-white p-2 rounded-md">
                <SelectValue placeholder="Select a Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose platform</SelectLabel>
                  <SelectItem value="browser">Browser (Web)</SelectItem>
                  <SelectItem value="pc">Windows (PC)</SelectItem>
                  <SelectItem value="all">All platforms</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="text-white">Genre:</div>
            <Select
              onValueChange={(value) => handleUpdateFilter(value, "category")}
              value={category}
            >
              <SelectTrigger className="w-full bg-gray-800 text-white p-2 rounded-md">
                <SelectValue placeholder="Select a genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose genre</SelectLabel>
                  <SelectItem value="shooter">Shooter</SelectItem>
                  <SelectItem value="moba">MOBA</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="mmo">MMO</SelectItem>
                  <SelectItem value="mmorpg">MMORPG</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="text-white">Sort:</div>
            <Select
              onValueChange={(value) => handleUpdateFilter(value, "sort-by")}
              value={sortBy}
            >
              <SelectTrigger className="w-full bg-gray-800 text-white p-2 rounded-md">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort By</SelectLabel>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="release-date">Release Date</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {games?.map((game: IGames, id) => (
            <NavLink to={`/freegame/${game.id}`} key={id}>
              <FreeGameCard game={game} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
