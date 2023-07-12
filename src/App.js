import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";

import Home from "./Pages/Home"
import Commitment from "./Pages/Commitment";
import Event from "./Pages/Event";
import Rundown from "./Pages/Rundown";
import Speakers from "./Pages/Speakers";
import PointInterest from "./Pages/PointInterest";
import Entertainment from "./Pages/Entertaintment";
import GreetingCommitment from "./Pages/GreetingCommitment";
import Attendance from "./Pages/Attendance";
import Survey from "./Pages/Survey";
import NotFound from "./Pages/NotFound";

import UseAudio from "./Components/UseAudio";

import "./styles/main.css"
import "./styles/mobile/responsive.css"
import audioBacksound from "./assets/backsound.mp3"

import AOS from "aos"
import "aos/dist/aos.css"
import MorningAttendance from "./Pages/MorningAttendance";

function App() {
  const [playing, toggleSound] = UseAudio(audioBacksound)

  let iconMusicPlay = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" className="icon-play" width={"24px"} height={"24px"}><path fill="#fff" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>

  let iconMusicPause = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" className="icon-pause" width={"24px"} height={"24px"}>
  <path fill="#fff" d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
  </svg>

  useEffect(() => {
    AOS.init({
      once: true
    })
    AOS.refresh()
  }, [])

  return (
    <>
    <div className="card-container">
      <Router>
        <Routes>
          <Route path="/*" element={<NotFound />}/>
          <Route path="/" element={<Home soundPlaying={playing} toggle={toggleSound}/>}/>
          <Route path="/main/commitment" element={<Commitment />}/>
          <Route path="/main/morning-attendance" element={<MorningAttendance />} />
          <Route path="/main/attendance" element={<Attendance />} />
          <Route path="/main/survey" element={<Survey />} />
          <Route path="/main/event" element={<Event />}/>
          <Route path="/main/rundown" element={<Rundown />}/>
          <Route path="/main/speakers" element={<Speakers />}/>
          <Route path="/main/point-of-interest" element={<PointInterest />}/>
          <Route path="/main/entertainment" element={<Entertainment />}/>
          <Route path="/main/greeting-commitment" element={<GreetingCommitment />}/>
        </Routes>
        
        <div className="button-music-wrapper">
          <button onClick={toggleSound} className="button-music" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1500">{playing ? iconMusicPlay : iconMusicPause}
          </button>
        </div>
      </Router>
    </div>
    </>
  );
}

export default App;
