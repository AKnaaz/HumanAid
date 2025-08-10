import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const slides = [
        {
            id: 1,
            img: "https://i.postimg.cc/zX6XFfh7/h2.avif",
            title: "Support Healthcare Initiatives",
            des: "Join hands to provide medical aid and spread health awareness in underprivileged communities."
        },
        {
            id: 2,
            img: "https://i.postimg.cc/5ymPqVLv/stu.png",
            title: "Empower Through Education",
            des: "Volunteer to teach and mentor children, helping them build a brighter future through learning."
        },
        {
            id: 3,
            img: "https://i.postimg.cc/fyQFfCF4/animal.jpg",
            title: "Compassion for Creatures",
            des: "Join hands to care for stray and injured animals. Your time and love can save lives."
        }
    ];

const Autoplay = () => {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

    return (
        <div>
            <Slider {...settings}>
                {
                    slides.map((slide) =>(
                        <div key={slide.id}>
                            <div className="h-64 md:h-80 lg:h-[450px] bg-cover bg-center flex flex-col justify-end p-6 text-white" 
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: `cover`,
                                backgroundPosition: `center`,
                                backgroundRepeat: `no-repeat`
                            }}
                            >
                <div className="text-center bg-[#0FA4AF] p-1 rounded-2xl">
                    <h2 className="md:text-xl font-bold">{slide.title}</h2>
                    <h2 className="text-xs md:text-lg">{slide.des}</h2>
                </div>

                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Autoplay;