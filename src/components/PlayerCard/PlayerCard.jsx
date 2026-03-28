import { useState } from 'react';
const PlayerCard = ({player ,availableBalance, setAvailableBalance ,handleSelectedPlayer}) => {


  const [isSelected,setIsSelected] = useState(false);
  function convertToNumber(price) {
  if (!price) return 0;

  const value = parseFloat(price.replace(/[^\d.]/g, "")); // 8
  if (price.toLowerCase().includes("crore")) {
    return value * 10000000;
  }
  if (price.toLowerCase().includes("lakh")) {
    return value * 100000;
  }
  return value;
}
function currentBlanceCheck(playerPrice, availableBalance, setAvailableBalance) {
  const priceNumber = convertToNumber(playerPrice);

  const currentBalance = availableBalance - priceNumber;

  if (currentBalance < 0) {
    alert("Not enough balance!");
    return;
  }

  setAvailableBalance(currentBalance);
}

    
  return (
    <div className="flex justify-center items-cente p-4">
      {/* Main Card Container */}
      <div className="card w-full bg-base-100 shadow-xl border border-gray-200 p-4 rounded-3xl">
        
        {/* Figure: Image with rounded corners */}
        <figure className="rounded-2xl overflow-hidden">
          <img
            src={player["player-image"]}
            alt={player["player-name"]}
            className="w-full h-64 object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="mt-6 space-y-4">
          
          {/* Player Name and Icon */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-200 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{player["player-name"]}</h2>
          </div>

          {/* Country and Role (Badge) */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
              <span>{player["player-country"]}</span>
            </div>
            <div className="badge badge-lg bg-gray-100 border-none text-gray-700 py-4 px-6 rounded-xl font-semibold">
              {player["playing-role"]}
            </div>
          </div>

          {/* Divider */}
          <div className="divider my-1"></div>

          {/* Rating Section */}
          <div className="flex flex-col gap-3">
            <p className="font-bold text-lg text-gray-900">Rating</p>
            <span>{player.rating}</span>
            
            {/* Left-Hand-Bat Info */}
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg text-gray-900">{player["batting-style"]}</span>
              <span className="text-gray-500 font-medium">{player["bowling-style"]}</span>
            </div>

            {/* Price and Action Button */}
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-lg text-gray-900">Price: {player.price}</span>
              <button
                disabled={isSelected}
                onClick={() => {
                  setIsSelected(true);
                  currentBlanceCheck(player.price, availableBalance, setAvailableBalance);
                  handleSelectedPlayer(player, setIsSelected);
                }}
                className={`btn btn-outline border-gray-300 hover:bg-gray-100 hover:text-black normal-case rounded-xl px-6 ${
                  isSelected ? "cursor-none" : "cursor-pointer"
                }`}
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlayerCard;