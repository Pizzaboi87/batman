import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/main/home/Home';
import Movies from './components/main/movies/Movies';
import Comics from './components/main/comics/Comics';
import Games from './components/main/games/Games';
import NotFound from './components/NotFound';
import CharacterPage from './components/main/home/characterPage/CharacterPage';
import ComicsBrowse from './components/main/comics/comicsBrowse/ComicsBrowse';
import ComicsSearch from './components/main/comics/comicsSearch/ComicsSearch';
import VolumePage from './components/main/comics/volumePage/VolumePage';
import IssueListPage from './components/main/comics/issueListPage/IssueListPage';
import IssuePage from './components/main/comics/issuePage/IssuePage';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <>
      <Header />
      <div
        className={`container ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/browsing" element={<Navigate to="/comics/browsing/box/1" />} />
          <Route path="/comics/browsing/box/:page" element={<ComicsBrowse />} />
          <Route path="/comics/search" element={<ComicsSearch />} />
          <Route path="/comics/vol_:volumeID" element={<VolumePage />} />
          <Route path="/comics/vol_:volumeID/issues" element={<IssueListPage />} />
          <Route path="/comics/vol_:volumeID/issues/:issue" element={<IssuePage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;