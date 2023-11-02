import React from 'react'
import clock from "../../../../assets/images/icons/clock.svg"
import gift from "../../../../assets/images/icons/gift.svg"
import pck from "../../../../assets/images/icons/package.svg"
import refresh from "../../../../assets/images/icons/refresh-cw.svg"

function Stats() {
    return (
        <>
            <section className="mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src={clock} alt=""/></div>
                                <h3 className="h5 mb-3">
                                    10 minute grocery now
                                </h3>
                                <p>Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                            </div>
                        </div>
                        <div className="col-md-6  col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src={gift} alt=""/></div>
                                <h3 className="h5 mb-3">Best Prices & Offers</h3>
                                <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess &
                                    offers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src={pck} alt=""/></div>
                                <h3 className="h5 mb-3">Wide Assortment</h3>
                                <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other
                                    categories.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-8 mb-xl-0">
                                <div className="mb-6"><img src={refresh} alt=""/></div>
                                <h3 className="h5 mb-3">Easy Returns</h3>
                                <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked
                                    <a href="#!">policy</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats