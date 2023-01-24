import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEyedropper, faHome, faLightbulb, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faBehance, faGithub, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logo" alt="Nipuna" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="uiux-link" to="/uiux">
                <FontAwesomeIcon icon={faEyedropper} color="#4d4d4e" />
            </NavLink>

            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/madushan-nipuna-b73975173">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Madushan97">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCFYRi9r1lpTIeH3Vpq-b0kw">
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/19nipuna97/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://t.me/M_dushan">
                    <FontAwesomeIcon icon={faTelegram} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://www.behance.net/madushannipuna">
                    <FontAwesomeIcon icon={faBehance} color="#4d4d4e" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;