import './index.css'
import ReactPlayer from 'react-player'

// Render a YouTube video player
const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer url="https://youtu.be/AiD6SOOBKZI?si=ZgZUlTPJHgO7y7HF" />
    </div>
  </div>
)

export default VideoPlayer
