import { useState, useEffect } from "react"; 

const UseAudio = (url) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggleSound = () => setPlaying(!playing)

    useEffect(() => {
      playing ? audio.play() : audio.pause()
    }, [playing]
    )

    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggleSound];

}
export default UseAudio