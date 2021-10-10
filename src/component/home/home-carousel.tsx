import bakeSushi from '../../assets/images/menu/highlight/bakeSushi.jpg'
import butterChicken from '../../assets/images/menu/highlight/chicken.jpg'
import cordonBlue from '../../assets/images/menu/highlight/cordonBlue.jpg'
import lumpia from '../../assets/images/menu/highlight/lumpia.jpg'
import menuSalad from '../../assets/images/menu/highlight/menuSalad.jpg'
import style from './homeStyle'
import Carousel from "react-material-ui-carousel";
import {Box, Button, Card, CardActionArea, CardMedia, Grid, Paper, Typography} from "@mui/material";
const items = [
    {
        name: "Bake Sushi",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in",
        image: bakeSushi,
    },
    {
        name: "Butter Chicken",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in",
        image: butterChicken,
    },
    {
        name: "Cordon Blue",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in",
        image: cordonBlue,
    },
    {
        name: "Friend Lumpia",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in",
        image: lumpia,
    },
    {
        name: "Salad Roll",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in",
        image: menuSalad,
    },
]

const homeCarousel = () => {
    const classes = style()
    return (
        <Carousel animation={'fade'}>
            {
                items.map((item, i) => {
                    return (
                        <Grid key={i} container className={classes.container}>
                            <Grid item md={12}
                                  style={{backgroundImage: `url(${item.image})`}}>
                                <div className={classes.textImage}>
                                    <h1>{item.name}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Carousel>
    )
}


export default homeCarousel
