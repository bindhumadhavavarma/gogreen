import React, { useState } from 'react'
import pic from "../../../../assets/images/products/product-img-1.jpg"
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'

function ProductCard(props) {
    const [isLoading, setIsLoading] = useState(false)

    
    const addToCart = async (size) => {
        if (localStorage.getItem("username")) {
            try {
                setIsLoading(true)
                const data = await AxiosPost('add_carts.php', { productid: props.product.productId, userid: localStorage.getItem("username"), quantity: 1,size:size })
                if (data.success) {
                    pushNotify("success", "Success", "Product added to cart successfully")
                }
                else pushNotify("error", "Error", data.error)
            } catch (err) {
                pushNotify("error", "Error", "Server Error!");
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        } else {
            pushNotify("error", "Error", "Please login to add to cart.")
        }

    }

    return (
        <div className="col-md-3 col-6 mt-8 " onClick={()=>props.setProductInfo(props.product)}>
            <div className="card  card-product-v2 h-100">
                <div className="card-body position-relative">
                    <div className="text-center position-relative ">
                        <div className=" position-absolute top-0 start-0">
                            <span className="badge bg-danger">Sale</span>
                        </div>
                        <a href="#!"> <img src={"http://localhost/siyabrands/" + JSON.parse(props.product.ProductImages)[0]}
                            alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>

                    </div>
                    <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">{props.product.ProductName}</a>
                    </h2>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div><span className="text-danger">{props.product.salePrice}</span> <span
                            className="text-decoration-line-through text-muted">{props.product.pricing}</span>
                        </div>
                        <div>
                            {props.product.inStock == "true" ? <span className="text-uppercase small text-primary">In Stock</span> :
                                <span className="text-uppercase small text-danger">Out of Stock</span>}
                        </div>
                    </div>
                    <div className="product-fade-block">
                        <div className="d-grid mt-4">
                            <a href="#" className="btn btn-primary rounded-pill" onClick={()=>addToCart(props.product.weights.split(',')[0])}>Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="product-content-fade border-info" style={{ "margin-bottom": "-60px" }}></div>
            </div>
        </div>
    )
}

export default ProductCard