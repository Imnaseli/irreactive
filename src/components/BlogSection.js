import React from 'react'
import {Link} from "react-router-dom"
import {shorten} from "../utility"
import '../style/style.scss'
import BlogTag from './BlogTag'


const BlogSection = ({blogs, user}) => {
  return (
    <>
            {blogs.map((blog) => (
                <div className="blog-border" key={blog.id}>
                        <div className="blogtimestamp"><p>{blog.timestamp.toDate().toDateString()}</p></div>
                        <div className="blogtitle"><h1>{blog.title}</h1></div>
                        <div className="blogtag"> <BlogTag tags={blog.tags} /> </div>
                        <div className="blogdescription"><p>{shorten(blog.description , 120)}</p></div>
                        <div className="blognav"><p>
                        {/* /detail/:id */}
                          <Link to={`/detail/${blog.id}`}>
                            Read More.
                          </Link>
                          </p></div>
                        <div></div>
                        <hr className='blogline'/>
                </div>
            ))}
    </>
  )
}

export default BlogSection
