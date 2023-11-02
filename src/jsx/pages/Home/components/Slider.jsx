import React from 'react'
import ad1 from "../../../../assets/images/banner/ad-banner-1.jpg"
import ad2 from "../../../../assets/images/banner/ad-banner-2.jpg"
import sld1 from "../../../../assets/images/slider/slider-image-1.jpg"
import sld2 from "../../../../assets/images/slider/slider-image-2.jpg"
import sld3 from "../../../../assets/images/slider/slider-image-3.jpg"

function Slider() {
    return (
        <>
        <div className='container  mt-3'>
            <div className="row">
                <div className="col-xxl-8 col-xl-7 ">

                    <div className="hero-slider" style={{overflowX:"hidden"}}>
                        <div
                            style={{ "backgroundImage": `url(${sld1})`, "background-repeat": "no-repeat", "background-size": "cover", "border-radius": ".5rem" }}>
                            <div className="ps-lg-12 py-lg-16 col-xxl-7 col-lg-9 py-14 px-8 text-xs-center">

                                <div className="d-flex align-items-center mb-4"><span>Exclusive Offer</span> <span
                                    className="badge bg-danger ms-2">15%</span></div>

                                <h2 className="text-dark display-5 fw-bold mb-3">Best Online Deals, Free Stuff </h2>
                                <p className="fs-5 text-dark">Only on this week... Don’t miss</p>

                                <div className="mb-4 mt-4"><span className="text-dark">Start from<span
                                    className="fs-4 text-danger ms-1">$5.99</span></span></div>

                                <a href="#!" className="btn btn-primary">Get Best Deal <i
                                    className="feather-icon icon-arrow-right ms-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-5 col-12 d-lg-flex d-xl-block gap-3 gap-xl-0">
                    <div className="flex-fill px-8 py-9 mb-6 mb-md-0 mb-xl-6 rounded" style={{ "background": `url(${ad1})`, "background-repeat": "no-repeat", " background-size": " cover" }}>
                        <div>
                            <h3 className="mb-0 fw-bold">10% cashback on <br />
                                personal care
                            </h3>
                            <div className="mt-4 mb-5 fs-5">
                                <p className="mb-0">Max cashback: $12</p>
                                <span>Code: <span className="fw-bold text-dark">CARE12</span></span>
                            </div>
                            <a href="#" className="btn btn-dark">Shop Now</a>
                        </div>
                    </div>
                    <div className="flex-fill px-8 py-8 rounded " style={{ "background": `url(${ad2})`, "background-repeat": "no-repeat", " background-size": " cover" }}>

                        <div>

                            <h3 className=" fw-bold mb-3">Say yes to <br />
                                season’s fresh
                            </h3>
                            <div className="mt-4 mb-5 fs-5">
                                <p className="fs-5 mb-0">Refresh your day <br />
                                    the fruity way
                                </p>
                            </div>
                            <a href="#" className="btn btn-dark">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Slider