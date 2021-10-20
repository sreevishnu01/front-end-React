import NavBar1 from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tutorial from "./pages/Tutorial";
import './index.scss'
import Test from "./components/Nav/Test";

function App() {
  return (
    <>
      <Router>
        <NavBar1 />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Tutorial" component={Tutorial} />
          <Route path="/post" component={Post} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
