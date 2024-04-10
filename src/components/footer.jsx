import {Link} from "react-router-dom"
import '../CSS/footer.css'
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import youtube from "../assets/youtube.png"
const Footer = () => {
    return (
        <div className='contaienr-home-footer'>
            <footer>
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="address">
                            <h2>Address: 42/2/1 R.B.S.Lane, Howrah,West Bengal, India, Postal code - 711101</h2>
                        </div>
                        <h2>Some useful social media links</h2>
                        <div className="social">
                            <div className="facebook">
                                <Link to="https://www.facebook.com"><img className="social-img" src={facebook} alt="facebook" /></Link>
                            </div>
                            <div className="instagram">
                                <Link to="https://www.instagram.com"><img className="social-img" src={instagram} alt="instagram" /></Link>
                            </div>
                            <div className="linkedin">
                                <Link to="https://in.linkedin.com"><img className="social-img" src={linkedin} alt="linkedin" /></Link>
                            </div>
                            <div className="youtube">
                                <Link to="https://www.youtube.com"><img className="social-img" src={youtube} alt="youtube" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="resources">
                            <h1 className="headning-footer">Resources</h1>
                            <ul>
                                <li>resources1</li>
                                <li>resources2</li>
                                <li>resources3</li>
                                <li>resources4</li>
                            </ul>
                        </div>
                        <div className="pages">
                        <h1 className="headning-footer">Pages</h1>
                            <ul>
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/courses"><li>Courses</li></Link>
                            <Link to="/mentor"><li>Mentors</li></Link>
                            <Link to="/career"><li>Careers</li></Link>
                            </ul>
                        </div>
                        <div className="company">
                        <h1 className="headning-footer">Companies</h1>
                            <ul>
                                <li>company1</li>
                                <li>company2</li>
                                <li>company3</li>
                                <li>company4</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3 className='copy'>COPYRIGHT &copy; 2024</h3>
            </footer>
        </div>
    )
}

export default Footer