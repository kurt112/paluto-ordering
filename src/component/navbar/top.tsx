import {Container, Divider, Grid, Hidden,Button} from "@mui/material";
import {Link} from "react-router-dom";
import topStyle from "./topStyle";
import logo from '../../assets/images/logo/palutoLogoTop.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
const top = () => {

    const classes = topStyle()

    return <Hidden mdDown>
        <header className={classes.header}>
            <Container className={classes.container}>
                <Grid container
                      justifyContent="center"
                      alignItems="center"
                      >
                    <Grid item md={2} container
                          justifyContent="center"
                          alignItems="center"

                    >
                        <img src={logo} width='50%' height={'50%'}
                             alt={'Logo'}/>
                    </Grid>
                    <Grid item md={10} container>
                       <Grid item md={6}>
                           <nav>
                               <ul className={`${classes.topNav} ${classes.topNavHeading}`}>
                                   <li>
                                       <Link to="/">Home</Link>
                                   </li>
                                   <li>
                                       <Link to="/about">About</Link>
                                   </li>
                                   <li>
                                       <Link to="/users">Users</Link>
                                   </li>
                               </ul>
                           </nav>
                       </Grid>
                        <Grid item md={2} className={`${classes.contact}`}>
                            <p>call and order</p>
                            <p className={classes.contactNumber}>09123678967</p>
                        </Grid>
                        <Button disableElevation
                                variant="contained" color="success" style={{marginLeft: '19'}} startIcon={<ShoppingCartIcon fontSize={'large'} />}>
                            go to your cart
                        </Button>

                    </Grid>
                </Grid>
                <br/>
                <Divider/>
                <br/>
                <Grid container>
                    <Grid item md={12}>
                        <nav>
                            <ul className={classes.topNav}>
                                <li>
                                    <Link to="/">Salad</Link>
                                </li>
                                <li>
                                    <Link to="/about">Chicken</Link>
                                </li>
                                <li>
                                    <Link to="/users">Cake</Link>
                                </li>
                                <li>
                                    <Link to="/users">Dessert</Link>
                                </li>
                                <li>
                                    <Link to="/users">Party Plan</Link>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </header>
    </Hidden>
}

export default top
