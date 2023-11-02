import React, { useEffect, useState } from 'react'
import pic from "../../../../assets/images/products/product-img-1.jpg"
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Checkout from './Checkout'

function Cart(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)
    const [showCheckout, setShowCheckout] = useState(false)

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_carts.php', { id: localStorage.getItem("username") })
            console.log(data)
            if (data.success) {
                setProducts(data.products)
                let sum = 0
                data.products.map(product => { sum += product.salePrice * product.quantity })
                setTotalPrice(sum)
            }
            else pushNotify("error", "Error", data.error)
        } catch (err) {
            pushNotify("error", "Error", "Server Error!");
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    const removeCartItem = async (id) => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('delete_cart.php', { id: id })
            console.log(data)
            if (data.success) {
                await fetchProducts()
                pushNotify("success", "Success", "Item deleted from cart successfully.")
            }
            else pushNotify("error", "Error", data.error)
        } catch (err) {
            pushNotify("error", "Error", "Server Error!");
            console.log(err)
        }
        finally {
            setIsLoading(false)
        }
    }

    const placeOrder = async (id) => {
       setShowCheckout(true)
    }

    useEffect(() => { fetchProducts() }, [])

    return (
        <>
            {showCheckout ? <Checkout setCurTab={props.setCurTab} products={products} totalPrice={totalPrice}></Checkout> :
                <section class="mb-lg-14 mb-8 mt-8">
                    <div class="container">

                        <div class="row">
                            <div class="col-12">

                                <div class="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 class="fw-bold">Shop Cart</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 col-md-7">

                                <div class="py-3">
                                    <ul class="list-group list-group-flush">
                                        {products == null ? null : products.map(product =>
                                            <li class="list-group-item py-3 py-lg-0 px-0 border-top">

                                                <div class="row align-items-center mt-3 mb-3">
                                                    <div class="col-3 col-md-2">
                                                        <img src={"http://localhost/siyabrands/" + JSON.parse(product.ProductImages)[0]} alt="Ecommerce" class="img-fluid" />
                                                    </div>
                                                    <div class="col-4 col-md-5">
                                                        <a href="shop-single.html" class="text-inherit"><h6 class="mb-0">{product.ProductName}</h6></a>
                                                        <span><small class="text-muted">Size : {product.size}, Quantity : {product.quantity}</small></span>
                                                    </div>

                                                    <div class="col-3 col-md-3 col-lg-2">

                                                        <div class="input-group input-spinner  ">
                                                            <div class="mt-2 small lh-1" onClick={() => removeCartItem(product.id)}> <a href="#!" class="text-decoration-none text-inherit"> <span
                                                                class="me-1 align-text-bottom">
                                                                <i class="fa fa-trash"></i></span><span class="text-muted">Remove</span></a></div>
                                                        </div>


                                                    </div>

                                                    <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span class="fw-bold">{product.salePrice * product.quantity}</span>

                                                    </div>
                                                </div>

                                            </li>
                                        )}
                                    </ul>

                                    <div class="d-flex justify-content-between mt-4">
                                        <Link to="/shop" class="btn btn-primary">Continue Shopping</Link>
                                    </div>

                                </div>
                            </div>


                            <div class="col-12 col-lg-4 col-md-5">

                                <div class="mb-5 card mt-6">
                                    <div class="card-body p-6">

                                        <h2 class="h5 mb-4">Summary</h2>
                                        <div class="card mb-2">

                                            <ul class="list-group list-group-flush">

                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="me-auto">
                                                        <div>Item Subtotal</div>

                                                    </div>
                                                    <span>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalPrice)}</span>
                                                </li>


                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="me-auto">
                                                        <div>Service Fee</div>

                                                    </div>
                                                    <span>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(10)}</span>
                                                </li>

                                                <li class="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="me-auto">
                                                        <div class="fw-bold">Subtotal</div>

                                                    </div>
                                                    <span class="fw-bold">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalPrice + 10)}</span>
                                                </li>
                                            </ul>

                                        </div>
                                        <div class="d-grid mb-1 mt-4">

                                            <button class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" onClick={placeOrder} type="submit">
                                                Checkout <span class="fw-bold">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalPrice + 10)}</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart