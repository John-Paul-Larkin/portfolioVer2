import ReactPlayer from "react-player/youtube";
import './YouTube.css'

export default function YouTube() {
  return (
    <div className="player-outer-wrapper">
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=D0f20o1ADF0"
        // light={true}
        volume={1}
        controls={true}
        muted={true}
      />
    </div>
  </div>
  )
}