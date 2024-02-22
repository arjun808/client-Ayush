import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from "./assets/bucket.png";
import s2 from "./assets/flower.png";
import s3 from "./assets/glass.png";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
      <div className="border border-gray-200 h-60 rounded-md">
        <Slider {...settings}>
          <div>
            <img
              src={s1}
              alt="Image 1"
              className="w-full h-56 object-contain"
            />
          </div>
          <div>
            <img
              src={s2}
              alt="Image 2"
              className="w-full h-56 object-contain"
            />
          </div>
          <div>
            <img
              src={s3}
              alt="Image 3"
              className="w-full h-56 object-contain"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
