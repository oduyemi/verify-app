import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Banner = () => {
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000
        };

    return(
        <div className="banner  w-full md-2/3 px-7 mx-auto relative flex justify-between">
            <div className="banner-description w-full md-1/2 p-3 ml-10">
                <h2 className="text-4xl font-bold text-blaq pl-8">
                    Product Authentication
                </h2>
                <p className="font-semi-bold text-lg text-orange py-2 mt-3 pl-8 mb-10">
                    Verify the authenticity of your products.
                </p>
            </div>
            <div className="slidebox banner-image w-full md-1/2 flex justify-around">
                <Slider className="logo-slider w-2/3 h-1/2 md-1/2 p-3" {...settings}>
                <div className="item"><img src={require("../assets/images/heroSlide/One.jpg")} alt="hero banner" className="max-h-60 w-1/2"/></div>
                <div className="item"><img src={require("../assets/images/heroSlide/Two.jpg")} alt="hero banner" className="max-h-60 w-1/2"/></div>              
                <div className="item"><img src={require("../assets/images/heroSlide/Three.jpg")} alt="hero banner" className="max-h-60 w-1/2"/></div>
                </Slider>
            </div>
        </div>
    );
}
