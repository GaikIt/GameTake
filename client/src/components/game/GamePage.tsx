import { useGetGameQuery } from "../../shared/service/game.service";
import { useNavigate, useParams } from "react-router-dom";
import { Games } from "../Home/Home";

export default function GamePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const numId = Number(id);

  if (isNaN(numId)) {
    navigate("/not-found");
    return null;
  }

  const { data: game, isLoading } = useGetGameQuery(numId);

  if (isLoading || !game) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const handleBackButtonClick = () => {
    navigate("..", { relative: "path" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section (Thumbnail Image) */}
          <div className="md:w-1/3">
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section (Game Information) */}
          <div className="md:w-2/3">
            <button
              className="text-sm text-gray-400 font-bold cursor-pointer bg-transparent hover:text-white mb-6"
              onClick={handleBackButtonClick}
            >
              Back
            </button>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{game.title}</h2>

              <div className="text-lg">
                <h3 className="text-xl font-semibold">About {game.title}</h3>
                <p>{game.description}</p>
              </div>

              {/* Additional Information Section */}
              <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Developer</h4>
                    <p>{game.developer}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Publisher</h4>
                    <p>{game.publisher}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Release Date</h4>
                    <p>{game.release_date}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Genre</h4>
                    <p>{game.genre}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Platform</h4>
                    <p>{game.platform}</p>
                  </div>
                </div>
              </div>

              {/* Screenshots Section */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Screenshots</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {game.screenshots.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        src={item.image}
                        alt="Screenshot"
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* System Requirements Section */}
              {game.minimum_system_requirements && (
                <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    System Requirements
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(game.minimum_system_requirements).map(
                      ([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <h4 className="font-semibold capitalize">{key}</h4>
                          <p>{value}</p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
