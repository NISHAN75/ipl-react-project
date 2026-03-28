import { Suspense, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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

  // select player
  const handleSelectedPlayer = (player,setIsSelected) => {
    const isExist = selectedPlayers.find((p) => p.id === player.id);

    if (isExist) {
      toast("This player is already selected!");
    } else if (selectedPlayers.length >= 6) {
      toast("You can take up to 6 players!");
      setIsSelected(false);
    } else {
      setSelectedPlayers([...selectedPlayers, player]);
      // setView("selected");
      toast(`${player["player-name"]} has been added!`);
    }
  };

  //remove player
  const handleRemovePlayer = (id) => {
    const remainingPlayers = selectedPlayers.filter((player) => player.id !== id);
    setSelectedPlayers(remainingPlayers);
    toast("Player removed successfully!");
  };

  // scroll shadow
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
              handleSelectedPlayer={handleSelectedPlayer} 
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
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;