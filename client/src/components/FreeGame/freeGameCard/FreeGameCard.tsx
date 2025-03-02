import { IGames } from "@/shared/types/game.interface";
import { useNavigate } from "react-router-dom";

export default function FreeGameCard({ game }: { game: IGames }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
      <div className="relative">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-br-md text-xs">
          {game.platform}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-white font-semibold text-lg">{game.title}</div>
        <div className="text-gray-400 text-sm">{game.short_description}</div>
      </div>
      <div className="mt-4 flex justify-between text-white">
        <div className="text-sm">{game.genre}</div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md text-xs"
          onClick={() => navigate(`/freegame/${game.id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
}
