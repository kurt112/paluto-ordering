import React, {Fragment} from 'react';
import TopNavBar from './component/navbar/top'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// route
import TopRoute from './route/top'

// footer
import Footer from './component/footer/footer'

const App = () => {
    return (
        <Router>
            <TopNavBar/>
            <main>


                <TopRoute/>

            </main>

            <Footer/>

        </Router>
    )
}

export default App;
