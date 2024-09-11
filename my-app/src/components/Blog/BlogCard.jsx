import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title, description, author }) => {
    return (
        <>
            <Link
                to={`/blogs/${title}`}
                onClick={() => {
                    window.scrollTo(0, 0);

                }}
                state={{ image, date, title, description, author }}
                className="text-decoration-none"
            >
                <div className="p-3 shadow-lg bg-light text-secondary transition-all duration-500 hover:shadow-xl">
                    <div className="overflow-hidden  ">
                        <img
                            src={image}
                            alt="No image"
                            className="img-fluid h-250 w-100 transition duration-700 hover-transform"
                        />
                    </div>
                    <div className="d-flex justify-content-between pt-2 text-muted">
                        <p>{date}</p>
                        <p className="text-truncate">By {author}</p>
                    </div>
                    <div className=" py-1">
                        <h3 className="text-truncate fw-bold ">{title}</h3>
                        <p className="text-truncate">{description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default BlogCard;
