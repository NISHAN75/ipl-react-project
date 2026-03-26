import { Suspense, useEffect, useState } from 'react';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import ToggleButtons from './components/ToggleButtons/ToggleButtons';

const fetchPlayers = async () => {
  const res = await fetch("/public/players.json");
  return res.json();
};

const playersPromise = fetchPlayers();

function App() {
  const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [view, setView] = useState('available');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ select player
  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.id === player.id);

    if (isExist) {
      alert("এই প্লেয়ারটি অলরেডি সিলেক্ট করা আছে!");
    } else if (selectedPlayers.length >= 6) {
      alert("আপনি সর্বোচ্চ ৬ জন প্লেয়ার নিতে পারবেন!");
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      setView("selected"); // ✅ auto switch tab
      alert(`${player["player-name"]} কে অ্যাড করা হয়েছে!`);
    }
  };

  // ✅ remove player
  const handleRemovePlayer = (id) => {
    const remainingPlayers = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(remainingPlayers);
    alert("Player removed successfully!");
  };

  // ✅ scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <div
        className={`sticky top-0 z-10 bg-white mb-5 transition-shadow duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        <Navbar availableBalance={availableBalance} />

        <ToggleButtons
          view={view}
          setView={setView}
          selectedCount={selectedPlayers.length}
        />
      </div>

      {/* Conditional Rendering */}
      {
        view === 'available' ? (
          <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
            <AvailablePlayers
              playersPromise={playersPromise}
              availableBalance={availableBalance}
              setAvailableBalance={setAvailableBalance}
              handleSelectedPlayer={handleSelectedPlayer} // ✅ pass
            />
          </Suspense>
        ) : (
          <Suspense fallback={<span>Loading...</span>}>
            <SelectedPlayers
              selectedPlayers={selectedPlayers}
              handleRemovePlayer={handleRemovePlayer}
              setView={setView} // ✅ pass
            />
          </Suspense>
        )
      }
    </>
  );
}

export default App;