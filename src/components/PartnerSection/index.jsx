import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";

// image
import pimg1 from '../../images/partners/1.png'
import pimg2 from '../../images/partners/2.png'
import pimg3 from '../../images/partners/3.png'
import pimg4 from '../../images/partners/4.png'
import pimg5 from '../../images/partners/2.png'
import pimg6 from '../../images/partners/3.png'


const partners = [
    {
        id: "01",
        pimg: pimg1,
    },
    {
        id: "02",
        pimg: pimg2,
    },
    {
        id: "03",
        pimg: pimg3,
    },
    {
        id: "04",
        pimg: pimg4,
    },
    {
        id: "05",
        pimg: pimg5,
    },
    {
        id: "06",
        pimg: pimg6,
    },
    {
        id: "07",
        pimg: pimg3,
    }
]

const index = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 757,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="partners-section-s3">
            <div className="container">
            <h2 className="d-none">No Content</h2>
            <ul className="partners-slider-s3">
                <Slider {...settings}>
                    {partners.map((partner, pitem) => (
                        <li key={pitem}>
                            <img src={partner.pimg} alt="" />
                        </li>
                    ))}
                </Slider>
            </ul>
            </div>
        </section>
    );
};

export default index;