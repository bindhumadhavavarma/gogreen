import React from 'react'
import pic from "../../../../assets/images/stores-logo/stores-logo-1.svg"

function CategoryCard() {
    return (
        <div className="col">
            <div className="card p-6 card-product">
                <div> <img src={pic} alt=""
                    className="rounded-circle icon-shape icon-xl" /></div>
                <div className="mt-4">
                    <h2 className="mb-1 h5"><a href="#!" className="text-inherit">E-Grocery Super Market</a></h2>
                    <div className="small text-muted"><span className="me-2">Organic </span><span className="me-2">Groceries</span>
                        <span>Butcher Shop</span></div>
                    <div className="py-3">
                        <ul className="list-unstyled mb-0 small">
                            <li>Delivery
                            </li>
                            <li>Pickup available</li>
                        </ul>
                    </div>
                    <div>
                        <div className="badge text-bg-light border">7.5 mi away</div>
                        <div className="badge text-bg-light border">In-store prices </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard