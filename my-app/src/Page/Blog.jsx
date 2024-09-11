import React from "react";
import BlogsComp from "../components/Blog/BlogComp";
import '../styles/Blog.css';
import CommonSection from "../Shared/CommonSection";

const Blog = () => {
    return (
        <div className=" min-vh-100 pt-5 bg-light ">
            <CommonSection title={"Our Blog"} />
            <div className="blogs-container "  >
                <BlogsComp />
            </div>
        </div>


    )
}

export default Blog;

