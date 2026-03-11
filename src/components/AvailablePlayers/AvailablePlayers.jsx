import { use } from 'react';


const AvailablePlayers = ({playersPromise}) => {

    const playerData = use(playersPromise)
    console.log(playerData);
    
    return (
        <div>
            <h2>This is available players</h2>
        </div>
    );
};

export default AvailablePlayers;