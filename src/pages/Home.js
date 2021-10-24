import React, { useEffect, useState } from 'react';
import Blogposts from '../components/Blog/Blogposts';
import Header from '../components/Header';
import axios from 'axios';
import Footer from "../components/Footer";

function Home() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post")
            console.log(res);
            setposts(res.data)
        }
        fetchPosts()

    }, [])
    return (
        <>
            <Header />

            <Blogposts posts={posts} />

            <Footer />

        </>
    );
}

export default Home;