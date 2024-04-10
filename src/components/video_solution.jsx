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
        <iframe className="vid" src="https://supersouls-pdfwhisperer.hf.space"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Video_solution