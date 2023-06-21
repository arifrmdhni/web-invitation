import React, { useState, useEffect } from "react"
import audioBacksound from '../assets/backsound.mp3'


const ButtonMusic = () => {

  const [audio] = useState(new Audio(audioBacksound));
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  

  let iconMusicPlay = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MusicNoteIcon" width="24"><path fill="#fff" d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"></path></svg>

  let iconMusicPause = <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MusicOffIcon" width="24">
  <path fill="#fff" d="M4.27 3 3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"></path>
  </svg>

  return (
      <div className="button-music-wrapper">
        <button onClick={toggleSound} className="button-music" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="3000">
          {playing ? iconMusicPlay : iconMusicPause}
        </button>
      </div>
  )
}

export default ButtonMusic