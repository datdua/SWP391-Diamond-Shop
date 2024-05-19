import React, { useEffect, useState } from 'react';


const slidesData = [
    {
        backgroundImage: 'url(assets/images/heoslider-image-1.jpg)',
        title: "Woman’s Jewellery Collection",
        description: "Jewellery may be made from a wide range of materials. Jewellery has been made to adorn nearly every body part from hairpins to toe.",
        link: "products.html",
    },
    {
        backgroundImage: 'url(assets/images/heoslider-image-2.jpg)',
        title: "Woman’s Jewellery Collection",
        description: "Jewellery may be made from a wide range of materials. Jewellery has been made to adorn nearly every body part from hairpins to toe.",
        link: "products.html",
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="tm-heroslider-area bg-grey">
            <div className="tm-heroslider-slider">
                {slidesData.map((slide, index) => (
                    <div
                        key={index}
                        className={`tm-heroslider ${currentSlide === index ? 'active' : ''}`}
                        style={{ backgroundImage: slide.backgroundImage }}
                    >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-8 col-12">
                                    <div className="tm-heroslider-contentwrapper">
                                        <div className="tm-heroslider-content">
                                            <h1>{slide.title}</h1>
                                            <p>{slide.description}</p>
                                            <a href={slide.link} className="tm-button">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
