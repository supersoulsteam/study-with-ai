import { Link } from "react-router-dom"
import '../CSS/navbar.css'
import login from "../assets/login.jpg"
import Team_logo from "../assets/Team_logo.jpg"
const Navbar = () => {
    return (
        <div className="container-navbar">
            <header>
                <div className='navbar'>
                    <img className="logo" src={Team_logo} alt="Logo" />
                    <Link to="/"><button className="nav-btn">Home</button></Link>
                    <Link to="/courses"><button className="nav-btn">Courses</button></Link>
                    <Link to="/mentor"><button className="nav-btn">Mentors</button></Link>
                    <Link to="/about"><button className="nav-btn">About us</button></Link>
                    <Link to="/career"><button className="nav-btn">Careers</button></Link>
                    <Link to="/tests"><button className="nav-btn">Tests</button></Link>
                    <Link to="/jobs"><button className="nav-btn">Jobs</button></Link>
                    <Link to="/contact"><button className="nav-btn">Contact us</button></Link>
                    <img src={login} alt="Login" className="login" />
                </div>
            </header>
        </div>
    )
}

export default Navbar