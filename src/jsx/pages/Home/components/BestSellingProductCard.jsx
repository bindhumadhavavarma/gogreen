import React from 'react'
import pic from "../../../../assets/images/products/product-img-1.jpg"

function BestSellingProductCard() {
    return (
        <div className="col-md-3 col-12 mt-8 ">
            <div className="card  card-product-v2 h-100">
                <div className="card-body position-relative">
                    <div className="text-center position-relative ">
                        <div className=" position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                        </div>
                        <a href="#!"> <img src={pic}
                            alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

                    </div>
                    <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Haldiram's Sev
                        Bhujia</a>
                    </h2>
                    <div>
                        <small className="text-warning"> <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5(149)</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div><span className="text-danger">$18</span> <span
                            className="text-decoration-line-through text-muted">$24</span>
                        </div>
                        <div><span className="text-uppercase small text-primary">
                            In Stock</span>
                        </div>
                    </div>
                    <div className="product-fade-block">
                        <div className="d-grid mt-4">
                            <a href="#" className="btn btn-primary rounded-pill">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="product-content-fade border-info" style={{ "margin-bottom": "-60px" }}></div>
            </div>
        </div>
    )
}

export default BestSellingProductCard