import React from 'react'
import Link from 'next/link';
import women from "@assets/images/home-classic/cat-women.png"
import men from "@assets/images/home-classic/cat-men.png"
import jewels from "@assets/images/home-classic/cat-jewelry.png"
import artPrint from "@assets/images/home-classic/Art-Print.png"
import kids from "@assets/images/home-classic/cat-kids.png"


const CatSection = () => {

    return (
        <React.Fragment>
            <section className="cat-section">
                <div className="container">
                    <div className="row g-xl-4 g-2">
                        <div className="col-md-6">
                            <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-570">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${women.src})` }}></div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Women</div>
                                </div>
                            </Link>
                            <div className="row gx-xl-4 gx-2 mt-xl-4 mt-2">
                                <div className="col-6">
                                    <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-300">
                                        <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${jewels.src})` }}></div>
                                        <div className="cat-grid-button text-body">
                                            <div className="cat_grid_item__title">Jewellery</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-300">
                                        <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${artPrint.src})` }}>
                                        </div>
                                        <div className="cat-grid-button text-body">
                                            <div className="cat_grid_item__title">Art Print</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-300 mb-xl-4 mb-2">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${men.src})`, backgroundPosition: "center" }}>
                                </div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">Men</div>
                                </div>
                            </Link>
                            <Link href="/shop-left-sidebar" className="d-block position-relative cat_grid_item overflow-hidden h-570">
                                <div className="h-100 w-100 cat-grid-img" style={{ backgroundImage: `url(${kids.src})`, backgroundPosition: "center" }}>
                                </div>
                                <div className="cat-grid-button text-body">
                                    <div className="cat_grid_item__title">kids</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default CatSection