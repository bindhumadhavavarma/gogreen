import React, { useEffect, useState } from 'react'
import pic1 from "../../../../assets/images/products/product-single-img-1.jpg"
import pic2 from "../../../../assets/images/products/product-single-img-2.jpg"
import pic3 from "../../../../assets/images/products/product-single-img-3.jpg"
import pic4 from "../../../../assets/images/products/product-single-img-4.jpg"
import { pushNotify } from '../../../components/pushNotify'
import { AxiosPost } from '../../../../context/UserContext'

function ProductMain(props) {
    const [zoom, setZoom] = useState(false);
    const [displayImg, setDisplayImg] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [size,setSize] = useState(null)

    const handleMouseMove = (e) => {
        // Calculate the position of the cursor relative to the div
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set the position of the zoomed image
        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    };

    useEffect(() => {
        setDisplayImg("http://localhost/siyabrands/" + JSON.parse(props.product.ProductImages)[0])
    }, [props.product])


    const addToCart = async () => {
        if(size==null){
            pushNotify("error","Error","Please select the size before adding to cart")
            return;
        }
        if (localStorage.getItem("username")) {
            try {
                setIsLoading(true)
                const data = await AxiosPost('add_carts.php', { productid: props.product.productId, userid: localStorage.getItem("username"), quantity: quantity,size:size })
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
        <>
            <div className="row mt-8">
                <div className="col-md-6">
                    <div className="product" id="product">
                        <div
                            className={`image-container ${zoom ? 'zoomed' : ''}`}
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setZoom(true)}
                            onMouseLeave={() => setZoom(false)}
                        >
                            <img src={displayImg} alt="Your Image" />
                        </div>
                    </div>

                    <div className="product-tools">
                        <div className="thumbnails row g-3" id="productThumbnails">
                            {JSON.parse(props.product.ProductImages).map(image =>
                                <div className="col-3">
                                    <div className="thumbnails-img" onClick={() => setDisplayImg("http://localhost/siyabrands/" + image)}>
                                        <img src={"http://localhost/siyabrands/" + image} alt="" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="ps-lg-10 mt-6 mt-md-0">

                        <a href="#!" className="mb-4 d-block">{props.product.SubcategoryName}</a>

                        <h1 className="mb-1">{props.product.ProductName} </h1>
                        <div className="fs-4">
                            <span className="fw-bold text-dark">{props.product.salePrice}</span> <span
                                className="text-decoration-line-through text-muted">{props.product.pricing}</span>
                        </div>

                        <hr className="my-6" />
                        <div className="mb-5">
                            {props.product.weights.split(',').map(weight => <button type="button" className={`btn  ${size==weight?'btn-primary':'btn-outline-secondary'} me-2`} onClick={()=>setSize(weight)}>{weight}</button>)}
                        </div>

                        <div>

                            <div className="input-group input-spinner  ">
                                <input type="button" value="-" className="button-minus  btn  btn-sm " data-field="quantity" onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null} />
                                <input type="number" step="1" max="10" value={quantity} name="quantity" className="quantity-field form-control-sm form-input   " />
                                <input type="button" value="+" className="button-plus btn btn-sm " data-field="quantity" onClick={() => setQuantity(quantity + 1)} />
                            </div>
                        </div>
                        <div className="mt-3 row justify-content-start g-2 align-items-center">
                            <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                                {isLoading ? <button type="button" className="btn btn-primary"><i class="fa fa-shopping-bag"></i> Loading...</button> :
                                    <button type="button" className="btn btn-primary" onClick={addToCart}><i class="fa fa-shopping-bag"></i> Add to
                                        cart</button>}


                            </div>
                        </div>

                        <hr className="my-6" />
                        <div>

                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td>Product Category:</td>
                                        <td>{props.product.categoryName}</td>
                                    </tr>
                                    <tr>
                                        <td>Product subcategory:</td>
                                        <td>{props.product.SubcategoryName}</td>
                                    </tr>
                                    <tr>
                                        <td>Availability:</td>
                                        <td>{props.product.inStock ? "Available" : "Out of stock"}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping:</td>
                                        <td><small>01 day shipping.<span className="text-muted">( Free pickup today)</span></small></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductMain