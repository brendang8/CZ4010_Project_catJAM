import "./Home.css";
import NavBar from "../NavBar/NavBar";
import Carousel from "react-material-ui-carousel"
import { Paper, Button } from '@mui/material'

function Home() {

    var items = [
        {
            name: "A whole world of freelance talent at your fingertips",
            description: "Discover high quality services from a wide range of categories",
            button: "Explore Now",
            src: "https://theprofessionalcentre.com/media/freelancer-office.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            button: "Try Now",
            src: "https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/18447.jpg?mtime=1568865212"
        }
    ]


    return(
        <div>
            <NavBar/>
            <Carousel className="carousel">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </div>
    )
}

function Item(props)
{
    return (
        <div className="item">
            <div className="item-image">
                <img src={props.item.src} alt=''/>
            </div>
            <div className="item-content">
                <div className="item-content-container">
                    <span className="item-text-title">{props.item.name}</span>
                    <span className="item-text-desc">{props.item.description}</span>
                    <Button variant="contained" color="secondary" style={{marginTop: '60px'}}>
                        {props.item.button}
                    </Button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home