import IssueListPage from './components/main/comics/issueListPage/IssueListPage'
import CharacterPage from './components/main/home/characterPage/CharacterPage'
import ComicsBrowse from './components/main/comics/comicsBrowse/ComicsBrowse'
import ComicsSearch from './components/main/comics/comicsSearch/ComicsSearch'
import VolumePage from './components/main/comics/volumePage/VolumePage'
import IssuePage from './components/main/comics/issuePage/IssuePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import Movies from './components/main/movies/Movies'
import Comics from './components/main/comics/Comics'
import Games from './components/main/games/Games'
import NoPage from './components/nopage/Nopage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/main/home/Home'
import { useState, useEffect } from 'react'
import './App.css'

function App() { 
  
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])

  return (
    <>
      <Header />
      <div
        className={`container ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn")
            setDisplayLocation(location)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route exact path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/comics' element={<Comics />} />
          <Route path='/comics/browsing' element={<ComicsBrowse />} />
          <Route path='/comics/browsing/box_:page' element={<VolumePage />} />
          <Route path='/comics/vol_:volumeID' element={<IssueListPage />} />
          <Route path='/comics/vol_:volumeID/:issue' element={<IssuePage />} />
          <Route path='/comics/searching/' element={<ComicsSearch />} />
          <Route path='/games' element={<Games />} />
          <Route path='/character/:id' element={<CharacterPage />} />
          <Route path='/*' element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;