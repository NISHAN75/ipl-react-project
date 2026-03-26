import { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  handleSelectedPlayer
}) => {

  const playerData = use(playersPromise);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Available Players</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          playerData.map(player => (
            <PlayerCard
              key={player.id}
              player={player}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              handleSelectedPlayer={handleSelectedPlayer} // ✅ pass
            />
          ))
        }
      </div>
    </div>
  );
};

export default AvailablePlayers;