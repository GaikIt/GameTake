import GameCard from "./gameCard/GameCard";
import { NavLink } from "react-router-dom";
import { useGetGamesQuery } from "../../shared/service/game.service";

export default function Home() {
  const sortBy = "release-date";
  const { data: games, isLoading } = useGetGamesQuery({ sortBy });

  if (isLoading || !games) {
    return (
      <div className="text-white text-center text-lg mt-10">Загрузка...</div>
    );
  }

  return (
    <div className="  min-h-screen p-6">
      <main className={`max-w-7xl mx-auto`}>
        <div className="text-center mb-8">
          <h2 className="text-white text-4xl font-bold">Новинки</h2>
          <p className="text-gray-400 mt-2">
            Последние релизы, отобранные специально для вас
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.slice(0, 8).map((game) => (
            <NavLink
              to={`/freegame/${game.id}`}
              key={game.id}
              className="transition-transform transform hover:scale-105"
            >
              <GameCard game={game} />
            </NavLink>
          ))}
        </div>
        <div className="text-center mt-10">
          <NavLink
            to="/freegame"
            className="text-white text-lg font-semibold border border-gray-500 px-6 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Посмотреть больше игр
          </NavLink>
        </div>
      </main>
    </div>
  );
}
