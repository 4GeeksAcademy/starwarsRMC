import React from "react";
import { useRef, useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeUp, faVolumeDown, faVolumeMute, faVolumeOff } from "@fortawesome/free-solid-svg-icons";

const audioOptions = (ref) => ({
  container: ref,
  waveColor: "#333",
  progressColor: "purple",
  cursorColor: "purple",
  responsive: true,
  height: 80,
  normalize: true,
  backend: "WebAudio",
  barWidht: 3,
  barGap: 2,
})
function formatTime(seconds) {
  let date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

export default function Audio()  {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState('');


  useEffect(() => {
    const options = audioOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(corrido);
    wavesurfer.current.on('ready', function() {
      setVolume(wavesurfer.current.getVolume());
      setDuration(wavesurfer.current.getDuration());
      setAudioFileName(corrido.split('/').pop());
    });
    wavesurfer.current.on('audioprocess', function() {
      setCurrentTime(wavesurfer.current.getCurrentTime());
    });
    return () => {
      wavesurfer.current.un('audioprocess');
      wavesurfer.current.un('ready');
      wavesurfer.current.destroy();
    };

  },[corrido]);
  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    wavesurfer.current.setVolume(newVolume);
    setMuted(newVolume === 0);
  }
  const handleMute = () => {
    setMuted(!muted);
    wavesurfer.current.setVolume(muted ? volume : 0);
  };
  const handleVolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1));
  };
  const handleVolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0));
  };
    
  return (
    <div id="waveform" ref={waveformRef} style={{width: '100%'}}>
   <div className="controls">
    <button onClick={handlePlayPause}>
    <FontAwesomeIcon icon={playing ? faPause : faPlay} />
    </button>
    <button onClick={handleMute}>
    <FontAwesomeIcon icon={muted ? faVolumeOff : faVolumeMute}/>
    </button>
    <button>
      <input type="range" id='volume' name='volume' min="0" max="1" step="0.05" value={muted ? 0 : volume} onChange={(e) => handleVolumeChange(parseFloat(e.target.value))} />
    </button>
    <button onClick={handleVolumeDown}>
    <FontAwesomeIcon icon={faVolumeDown}/>
    </button> 
    <button onClick={handleVolumeUp}>
    <FontAwesomeIcon icon={faVolumeUp} />
    </button>
    <div className='audio-info'>
      <span> Playing : {audioFileName}</span>
      <span> Duration : {formatTime(duration)} | Current Time :{''}
        {formatTime(currentTime)}
      </span>
      <span> Volume : {Math.round(volume * 100)}%</span>
    </div>
      
    </div>
  </div>
)}

