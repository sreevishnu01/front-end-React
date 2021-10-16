import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "../style/home.css";

const Home = () => {
    return (
        <>
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;