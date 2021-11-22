import "./NavBar.css"
import logo from '../../assets/catjam.png'

function NavBar() {
    return (
        <div className="navbar-main">
            <div className="logo">
                <img className="logo-picture" src={logo}/>
                <span className="logo-text">catJAM</span>
            </div>
            <div className="navbar-option">
                <span>Login</span>
            </div>
            <div className="navbar-option">
                <span>Login</span>
            </div>
            <div className="navbar-option">
                <span>Login</span>
            </div>
        </div>
    )
}

export default NavBar