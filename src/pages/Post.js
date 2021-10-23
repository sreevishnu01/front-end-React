import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Test from '../components/Nav/Test'
import Blogpost from '../components/Blog/BlogPost';




function Post() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            const res = await axios("/post/" + path);
            setPost(res.data);
        };
        getPost()
    }, [path]);
    return (
        <>
            <Test />
            <Blogpost post={post} />


        </>
    )
}

export default Post
