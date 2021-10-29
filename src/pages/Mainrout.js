import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar1 from "../components/Nav/Navbar";
import Home from "./Home";
import Post from "./Post";
import About from "./About";
import Tutorial from "./Tutorial";
import Signin from '../components/Authentication/Signin';
import Login from '../components/Authentication/Login';
import { useSelector } from 'react-redux';

function Mainrout() {
    const user = useSelector(state => state.user.token)
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
                    {/* <Route path="/login" component={Login} /> */}
                    <Route path="/login">{user ? <Home /> : <Login />}</Route>

                </Switch>
            </Router>

        </>
    )
}

export default Mainrout
