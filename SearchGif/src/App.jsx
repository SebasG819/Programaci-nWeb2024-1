import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GifProvider } from './Context/GifContext'
import { Home } from './Screens/Home/Home';
import { Favorites } from './Screens/Favorites/Favorites';
import { NavBar } from './Components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <GifProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </GifProvider>
      </div>
    </Router>
  );
}

export default App;
