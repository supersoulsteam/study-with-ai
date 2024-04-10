import { Link } from "react-router-dom"
import '../CSS/video_solution.css'
const Video_solution = () => {
  return (
    <div className="container-home-vid">
      <div className="btn">
        <Link><button className="vid-btn">PROBLEM</button></Link>
        <Link><button className="vid-btn">HINT</button></Link>
        <Link><button className="vid-btn">SOLUTION</button></Link>
      </div>
      <div className="main-solution">
        <div className="text">
          Text solution
        </div>
        <div className="video">
        <iframe className="vid" src="https://www.youtube.com/embed/gbAdFfSdtQ4?si=9a4d_kdZdPJefPsh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video_solution