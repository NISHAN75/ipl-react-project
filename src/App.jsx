import { Suspense } from 'react';
import './App.css';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import Navbar from './components/Navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const fetchPlayers = async() => {
  const res = fetch("/public/players.json")
  return (await res).json();
}

function App() {
const playersPromise = fetchPlayers()
  return ( 
    <>
    <Navbar></Navbar>
    
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
      <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
    </Suspense>
    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
