import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import MyLogoS from '../../assets/images/logo-s.png'
import MyLogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={MyLogoS} alt="logo" />
                <img
                    className="sub-logo"
                    src={MyLogoSubtitle}
                    alt="burakSubtitle"
                />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="gray" />
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar
