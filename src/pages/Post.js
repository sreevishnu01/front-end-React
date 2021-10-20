import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Test from '../components/Nav/Test'




function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/leaders/" + path);
            setPost(res.data);
        };
        getPost()
    }, [path]);
    return (
        <>
            <Test />
            <h1>{post.name}</h1>
            <p>{post.description}</p>

        </>
    )
}

export default Post
