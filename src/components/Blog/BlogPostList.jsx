import React from 'react'
import { useSelector } from 'react-redux'

function BlogPostList() {
    const blog = useSelector(state => state.blog.data)
    console.log(blog)
    return (

        < div >
            {blog.map(p => (
                <h1 key={p._id}>{p.title}</h1>
            ))}

        </div >
    )
}

export default BlogPostList
