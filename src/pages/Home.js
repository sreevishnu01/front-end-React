import React, { useEffect, useState } from 'react';
import Blogpost from '../components/Blogpost';
import Header from '../components/Header';
import axios from 'axios';

function Home() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/leaders")
            setposts(res.data)
        }
        fetchPosts()

    }, [])
    return (
        <>
            <Header />

            <Blogpost posts={posts} />

        </>
    );
}

export default Home;