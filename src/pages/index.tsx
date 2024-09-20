import React from 'react'
import Trending from '../components/home/Trending';
import Shipping from '../components/home/Shipping';
import FooterPage from '../components/home/Footer';
import Ourproduct from '../components/home/Ourproduct';
import HomeSection from '../components/home/HomeSection';
import CatSection from '../components/home/CatSection';

// import Header2 from '@src/components/Header2';
import HeadTitle from '../components/home/HeadTitle';

const HomeClassic = () => {

    return (
        <React.Fragment>

            <HeadTitle title="Home Classic" />
            <div>

                {/* header */}
                {/* <Header2 /> */}

                {/* main slide */}
                <HomeSection />

                {/* cat section */}
                <CatSection />

                {/* trending */}
                <Trending />

                {/* our product */}
                <Ourproduct />

                {/* shipping */}
                <Shipping />

                {/* footer */}
                <FooterPage />

            </div>
        </React.Fragment>
    )
}

export default HomeClassic