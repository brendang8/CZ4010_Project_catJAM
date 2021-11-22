import "./NavBar.css"
import logo from '../../assets/catjam.png'

import { Button, AppBar, Toolbar} from '@mui/material'

function NavBar() {
    return (
        <div>
            <AppBar style={{backgroundColor: '#313131'}}>
                <Toolbar>
                <div className="logo">
                    <img className="logo-picture" src={logo}/>
                    <span className="logo-text">catJAM</span>
                </div>
                <div className="navbar-option-container">
                    <Button className="navbar-option" style={{ color: "white"}}> Sign In</Button>
                    <Button className="navbar-option" style={{ color: "white"}}> Join</Button>
                </div>
                
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default NavBar