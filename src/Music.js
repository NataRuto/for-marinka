import { useRef, useState } from "react";
import song from './song.mp3'

function Music() {
    const refAudio = useRef();
    const [paused, setPaused] = useState(true);

    const handlePlay = () => {
        setPaused(!paused);
        paused ? refAudio.current.play() : refAudio.current.pause();
    }

    return(
        <div>
<audio
ref = {refAudio}
src = {song}
loop = "loop"
/>
<button onClick={handlePlay}>
    {paused ? 'play' : 'pause'}
</button>
        </div>
    )
}

export default Music;