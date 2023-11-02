import React, { useEffect, useState } from 'react'
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'

function Checkout(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [methods, setMethods] = useState(null)
    const [addresses, setAddr] = useState(null)
    const [paymentMethod, setPaymentMethod] = useState(null)
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [instructions, setInstructions] = useState("")

    const fetchAddrs = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_addresses.php', { id: localStorage.getItem("username") })
            console.log(data)
            if (data.success) {
                setAddr(data.addresses)
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

    useEffect(() => { fetchAddrs() }, [])

    const fetchMethod = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_paymentmethods.php', { id: localStorage.getItem("username") })
            console.log(data)
            if (data.success) {
                setMethods(data.methods)
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

    const placeOrder = async () => {
        if (paymentMethod == null) { pushNotify("error", "Error", "Please select a payment method to continue."); return; }
        if (selectedAddress == null) { pushNotify("error", "Error", "Please select an andrees to continue."); return; }
        let data =null
        await props.products.forEach(async product => {
            try {
                setIsLoading(true)
                data = await AxiosPost('add_orders.php',
                    {
                        userid: localStorage.getItem("username"),
                        productid: product.productid,
                        quantity: product.quantity,
                        Address: selectedAddress,
                        size: product.size,
                        status: "In Progress",
                        paymentMethod: paymentMethod,
                        instructions: instructions,
                        id:product.id
                    })
                console.log(data)
                if (data.success) {
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

        )
        pushNotify("success", "Success", "Order placed successfully")
        props.setCurTab(0)
    }

    useEffect(() => { fetchMethod() }, [])
    return (
        <>
            <section class="mb-lg-14 mb-8 mt-8">
                <div class="container">

                    <div class="row">

                        <div class="col-12">
                            <div>
                                <div class="mb-8">

                                    <h1 class="fw-bold mb-0">Checkout</h1>
                                    <p class="mb-0">Already have an account? Click here to <a href="#!">Sign in</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div class="row">
                            <div class="col-12 col-md-12 col-lg-10">
                                <div class="mt-4 mt-lg-0">
                                    <div class="card shadow-sm">
                                        <h5 class="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                                        <ul class="list-group list-group-flush">
                                            {
                                                props.products.map(product =>
                                                    <li class="list-group-item px-4 py-3">
                                                        <div class="row align-items-center">
                                                            <div class="col-2 col-md-2">
                                                                <img src={"http://localhost/siyabrands/" + JSON.parse(product.ProductImages)[0]} alt="Ecommerce" class="img-fluid" /></div>
                                                            <div class="col-5 col-md-5">
                                                                <h6 class="mb-0">{product.ProductName}</h6>
                                                                <span><small class="text-muted">{product.size}</small></span>
                                                            </div>
                                                            <div class="col-2 col-md-2 text-center text-muted">
                                                                <span>{product.quantity}</span>

                                                            </div>
                                                            <div class="col-3 text-lg-end text-start text-md-end col-md-3">
                                                                <span class="fw-bold">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.salePrice * product.quantity)}</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }

                                            <li class="list-group-item px-4 py-3">
                                                <div class="d-flex align-items-center justify-content-between   mb-2">
                                                    <div>
                                                        Item Subtotal

                                                    </div>
                                                    <div class="fw-bold">
                                                        {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(props.totalPrice)}

                                                    </div>

                                                </div>
                                                <div class="d-flex align-items-center justify-content-between  ">
                                                    <div>
                                                        Service Fee <i class="feather-icon icon-info text-muted" data-bs-toggle="tooltip"
                                                            title="Default tooltip"></i>

                                                    </div>
                                                    <div class="fw-bold">
                                                        {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(10)}

                                                    </div>

                                                </div>

                                            </li>

                                            <li class="list-group-item px-4 py-3">
                                                <div class="d-flex align-items-center justify-content-between fw-bold">
                                                    <div>
                                                        Subtotal
                                                    </div>
                                                    <div>
                                                        {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(props.totalPrice + 10)}


                                                    </div>

                                                </div>


                                            </li>

                                        </ul>

                                    </div>


                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12 mt-3">

                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                    <div class="accordion-item py-4">

                                        <div class="d-flex justify-content-between align-items-center">

                                            <a href="#" class="fs-5 text-inherit collapsed h4" data-bs-toggle="collapse"
                                                data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                                <i class="feather-icon icon-map-pin me-2 text-muted"></i>Add delivery address
                                            </a>
                                        </div>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse show"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="mt-5">
                                                <div class="row">
                                                    {
                                                        addresses == null ? null : addresses.length == 0 ? "No addresses found, Please add an address to continue." : addresses.map(address =>
                                                            <div class="col-lg-6 col-12 mb-4">
                                                                <div class="card card-body p-6 ">
                                                                    <div class="form-check mb-4">
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault1" id={address.id} onClick={() => setSelectedAddress(address.id)} />
                                                                        <label class="form-check-label text-dark" for={address.id}>
                                                                            {address.name}
                                                                        </label>
                                                                    </div>

                                                                    <p class="mb-6">{address.addrLine1}<br />

                                                                        {address.addrLine2} <br />

                                                                        {address.city} {address.state}<br />

                                                                        {address.country} {address.pincode}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="accordion-item py-4">

                                        <a href="#" class="text-inherit h5" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <i class="feather-icon icon-shopping-bag me-2 text-muted"></i>Delivery instructions
                                        </a>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse "
                                            data-bs-parent="#accordionFlushExample">

                                            <div class="mt-5">
                                                <label for="DeliveryInstructions" class="form-label sr-only">Delivery instructions</label>
                                                <textarea class="form-control" id="DeliveryInstructions" rows="3"
                                                    placeholder="Write delivery instructions " value={instructions} name='instructions' onChange={(e) => setInstructions(e.target.value)}></textarea>
                                                <p class="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                                                <div class="mt-5 d-flex justify-content-end">
                                                    <a href="#" class="btn btn-outline-gray-400 text-muted"
                                                        data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                                        aria-controls="flush-collapseTwo">Prev</a>
                                                    <a href="#" class="btn btn-primary ms-2" data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseFour" aria-expanded="false"
                                                        aria-controls="flush-collapseFour">Next</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="accordion-item py-4">

                                        <a href="#" class="text-inherit h5" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <i class="feather-icon icon-credit-card me-2 text-muted"></i>Payment Method
                                        </a>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse "
                                            data-bs-parent="#accordionFlushExample">

                                            <div class="mt-5">
                                                <div>
                                                    {
                                                        methods == null ? null : methods.map(method =>
                                                            <div class="card card-bordered shadow-none mb-2">
                                                                <div class="card-body p-6">

                                                                    <div class="d-flex">
                                                                        <div class="form-check">
                                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id={method.id} onClick={() => setPaymentMethod(method.id)} />
                                                                            <label class="form-check-label ms-2" for={method.id}>

                                                                            </label>
                                                                        </div>
                                                                        <div>
                                                                            <h5 class="mb-1 h6"> **** **** **** {method.cardNumber.substring(12)}</h5>
                                                                            <p class="mb-0 small">Expires on {method.month} {method.year}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                    <div class="card card-bordered shadow-none">
                                                        <div class="card-body p-6">

                                                            <div class="d-flex">
                                                                <div class="form-check">
                                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="cashonDelivery" onClick={() => setPaymentMethod("COD")} />
                                                                    <label class="form-check-label ms-2" for="cashonDelivery">

                                                                    </label>
                                                                </div>
                                                                <div>
                                                                    <h5 class="mb-1 h6"> Cash on Delivery</h5>
                                                                    <p class="mb-0 small">Pay with cash when your order is delivered.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mt-5 d-flex justify-content-end">
                                                        <a href="#" class="btn btn-outline-gray-400 text-muted"
                                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                                                            aria-controls="flush-collapseThree">Prev</a>
                                                        <a href="#" class="btn btn-primary ms-2" onClick={placeOrder}>Place Order</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>



                        </div>
                    </div>


                </div>


            </section>
        </>
    )
}

export default Checkout