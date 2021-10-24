import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar1 from "../components/Nav/Navbar";
import Home from "./Home";
import Post from "./Post";
import About from "./About";
import Footer from "../components/Footer";

import Tutorial from "./Tutorial";
import Signin from '../components/Authentication/Signin';
import Login from '../components/Authentication/Login';

function Mainrout() {
    return (
        <>
            <Router>
                <NavBar1 />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/Tutorial" component={Tutorial} />
                    <Route path="/post" component={Post} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/login" component={Login} />

                </Switch>
            </Router>
            <Footer />
        </>
    )
}

export default Mainrout
