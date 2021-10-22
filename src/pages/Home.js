import React, { useEffect, useState } from 'react';
import Blogposts from '../components/Blog/Blogposts';
import Header from '../components/Header';
import axios from 'axios';

function Home() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/post")
            setposts(res.data)
        }
        fetchPosts()

    }, [])
    return (
        <>
            <Header />

            <Blogposts posts={posts} />

        </>
    );
}

export default Home;