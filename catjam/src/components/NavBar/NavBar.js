import "./NavBar.css"
import logo from '../../assets/catjam.png'

import { Button, AppBar, Toolbar} from '@mui/material'

function NavBar() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                <div className="logo">
                    <img className="logo-picture" src={logo}/>
                    <span className="logo-text">catJAM</span>
                </div>
                <div className="navbar-option-container">
                    <Button style={{ color: "white"}}> Sign In</Button>
                    <Button style={{ color: "white"}}> Join</Button>
                </div>
                
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default NavBar