import React from "react";
import "./App.css";
import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <ReactHlsPlayer
        src="http://tirth.onrender.com/live/Tirth/index.m3u8"
        controls={true}
        width="100%"
        height="auto"
        hlsConfig={{
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          lowLatencyMode: true,
          enableWorker: true
        }}
      />
    </div>
  );
}

export default App;
