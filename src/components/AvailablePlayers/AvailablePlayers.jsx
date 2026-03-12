import { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playersPromise}) => {

    const playerData = use(playersPromise)

    
    return (
        <div className="max-w-[1200px] mx-auto">
            <h2>This is available players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-4">
                {
                    playerData.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)
                }
            </div>
        </div>
    );
};

export default AvailablePlayers;