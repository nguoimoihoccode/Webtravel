import React from "react";
import '../styles/About.css'
import BlogsComp from "../components/Blog/BlogComp";
import Location from "../components/Location/Location";
import CommonSection from "../Shared/CommonSection";

const About = () => {
    return (
        <div className=" pt-5 bg-light">
            <CommonSection title={"About"} />

            <div className="about-container "  >
                <h1 className="About_us">
                    About us
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    ducimus cupiditate quo harum officia perspiciatis hic ut sunt
                    repudiandae, laboriosam expedita nostrum tempora, consectetur
                    itaque, voluptate error aperiam corrupti ullam aspernatur a!
                    Dolorem, reprehenderit amet quidem deleniti iure rem vel a enim
                    ipsam hic numquam consequatur eius id eaque accusamus repudiandae
                    impedit, quisquam non, harum inventore ratione? Tempora voluptatum
                    ut eligendi corrupti esse, repellat nesciunt illum facilis officiis?
                    Nisi quidem officiis asperiores nostrum ipsa maiores explicabo quia!
                    Corporis provident asperiores fuga eligendi rem temporibus possimus
                    autem excepturi! Facilis sunt corrupti nesciunt asperiores, ab
                    consectetur doloremque, velit a mollitia possimus quaerat!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                    suscipit minus similique aliquam recusandae quisquam id nulla
                    tempora voluptate vero.

                </p>
            </div>
            <Location />
            <BlogsComp />

        </div>

    )
}

export default About

