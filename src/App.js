import React from "react";
import "./App.css";
import ReactHlsPlayer from "react-hls-player";

function App() {
  const playerRef = React.useRef();

  return (
    <div className="App">
      <ReactHlsPlayer
        playerRef={playerRef}
        src="http://tirth.onrender.com/live/Tirth/index.m3u8"
        controls={true}
      />
    </div>
  );
}

export default App;
