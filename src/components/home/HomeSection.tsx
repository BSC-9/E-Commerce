import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import slider1 from "@assets/images/slide/slider-01.png"
import slider2 from "@assets/images/slide/slider-02.png"
import slider3 from "@assets/images/slide/slider-03.png"
import Link from 'next/link';

import 'flickity/css/flickity.css';
const HomeSection = () => {
    const flickityRef = useRef<Flickity | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {

            const FlickityClass = require('flickity');
            flickityRef.current = new FlickityClass('.slideshow', {
                fade: false,
                cellAlign: 'center',
                imagesLoaded: false,
                lazyLoad: false,
                freeScroll: false,
                wrapAround: true,
                autoPlay: false,
                pauseAutoPlayOnHover: true,
                rightToLeft: false,
                prevNextButtons: false,
                pageDots: true,
                contain: true,
                adaptiveHeight: true,
                dragThreshold: 5,
                percentPosition: true,
            });

        }


        return () => {
            if (flickityRef.current) {
                flickityRef.current.destroy();
            }
        };
    }, []);

    return (
        <React.Fragment>
            <div className="kalles-home-section type_slideshow type_carousel">
                <div className="slideshow">


                    <div
                        className="slideshow__slide w-100"
                        style={{ backgroundImage: `url(${slider1.src})` }}
                    >
                        <Link
                            href="/shop-filter-sidebar"
                        >
                        </Link>
                    </div>


                    <div
                        className="slideshow__slide w-100"
                        style={{ backgroundImage: `url(${slider2.src})` }}
                    >

                        <Link
                            href="/shop-filter-sidebar"
                        >
                        </Link>

                    </div>

                    <div
                        className="slideshow__slide w-100"
                        style={{ backgroundImage: `url(${slider3.src})` }}
                    >

                        <Link

                            href="/shop-filter-sidebar"
                        >
                            Explore Now
                        </Link>
                    </div>

                </div>
            </div>
        </React.Fragment >
    )
}
export default HomeSection