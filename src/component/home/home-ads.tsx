import {Container, Grid} from "@mui/material";
import abby from '../../assets/images/abby.jpg';
const HomeAds = () => {
    return (
        <Container>
            <Grid container>
                <Grid item md={12}>
                    <img src={abby}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeAds
