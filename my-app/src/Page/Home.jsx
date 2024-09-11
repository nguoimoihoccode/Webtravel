import React from "react";
import Hero from "../components/Hero/Hero";
import HotTour from "../components/HotTour/HotTour";
import TopDes from "../components/TopDes";
import WCU from "../components/WCU";
import Banner from "../components/Banner/Banner";
import Banner1 from '../assets/image/vista-traseira-do-homem-asiatico-no-chapeu-com-mala-mala-e-mochila-caminhando-para-a-praia_9083-3246.avif'
import BannerIMG from "../components/BannerIMG/BannerIMG";
import Banner2 from "../assets/image/pexels-photo-346885.webp"
import BlogsComp from "../components/Blog/BlogComp";
import ReviewList from "../components/Reviews/ReviewList";
import SearchBar from "../components/Search";
const Home = () => {

    return (
        <>


            <div className="">
                <Hero />
                {/* <SearchBar /> */}

                <HotTour />
                <BannerIMG img={Banner1} />
                <TopDes />
                <WCU />
                <Banner />
                <BannerIMG img={Banner2} />
                <BlogsComp />
                <ReviewList />




            </div>



        </>
    )
}

export default Home