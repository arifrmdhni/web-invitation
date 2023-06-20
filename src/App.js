import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos"
import "aos/dist/aos.css"

import UseAudio from './Components/UseAudio';

import Home from "./Pages/Home"
import Commitment from "./Pages/Commitment"
import Event from "./Pages/Event"
import Rundown from "./Pages/Rundown"
import Speakers from "./Pages/Speakers"
import PointInterest from "./Pages/PointInterest";
import Entertainment from "./Pages/Entertainment";
import GreetingCommitment from "./Pages/GreetingCommitment";
import NotFound from "./Pages/NotFound"
import audioBacksound from "./assets/backsound.mp3"


import "./styles/main.css"
import "./styles/mobile/responsive.css"



function App() {

  useEffect(() => {
    AOS.init({
      once: true
    })
    AOS.refresh()
  }, [])
  
  const [playing, toggleSound] = UseAudio(audioBacksound)

  let iconMusicPlay = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MusicNoteIcon" width="24"><path fill="#fff" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>

  let iconMusicPause = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MusicOffIcon" width="24">
  <path fill="#fff" d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
  </svg>

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home soundPlaying={playing} toggle={toggleSound}/>} />
          <Route path="/main/commitment" element={<Commitment/>} />
          <Route path="/main/event" element={<Event />} />
          <Route path="/main/rundown" element={<Rundown />} />
          <Route path="/main/speakers" element={<Speakers />} />
          <Route path="/main/point-of-interest" element={<PointInterest />} />
          <Route path="/main/entertainment" element={<Entertainment />} />
          <Route path="/main/greeting-commitment" element={<GreetingCommitment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <div className="button-music-wrapper">
      <button onClick={toggleSound} className="button-music" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000">
        {playing ? iconMusicPlay : iconMusicPause}
      </button>
      </div>
    </>
  )
}

export default App;
