import { MdDeleteForever } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayers, handleRemovePlayer, setView }) => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-6">
        Selected Players ({selectedPlayers.length} / 6)
      </h2>

      {/* Player List */}
      <div className="space-y-4 mb-10">
        {selectedPlayers.length > 0 ? (
          selectedPlayers.map((player) => (
            <div
              key={player.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={player["player-image"]}
                  alt={player["player-name"]}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold">{player["player-name"]}</h3>
                  <p className="text-sm text-gray-500">
                    {player["playing-role"]} ({player["player-country"]})
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    Price: {player.price}
                  </p>
                </div>
              </div>

              {/* Delete */}
              <button 
                onClick={() => handleRemovePlayer(player.id)}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <MdDeleteForever size={32} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No players selected</p>
        )}
      </div>

      {/* Add More */}
      <button
        onClick={() => setView("available")} // ✅ go back
        className="btn bg-[#E7FE29] border px-6 font-bold rounded-xl"
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;