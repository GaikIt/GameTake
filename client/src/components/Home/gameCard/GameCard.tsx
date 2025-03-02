import { IGames } from "@/shared/types/game.interface";

export default function GameCard({ game }: { game: IGames }) {
  return (
    <div
      className={`bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition`}
    >
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 left-2 bg-gray-900 text-white px-3 py-1 text-xs rounded-md">
          {game.genre}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-bold mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm">{game.short_description}</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-gray-500 text-xs">{game.release_date}</p>
          <p className="text-gray-500 text-xs">{game.platform}</p>
        </div>
      </div>
    </div>
  );
}
