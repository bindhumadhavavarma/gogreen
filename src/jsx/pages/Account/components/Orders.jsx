import React, { useEffect, useState } from 'react'
import pic from "../../../../assets/images/products/product-img-1.jpg"
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
import { ScaleLoader } from 'react-spinners'

function Orders() {
    const [isLoading, setIsLoading] = useState(false)
    const [orders, setOrders] = useState(null)

    const fetchOrders = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_orders_userid.php', { id: localStorage.getItem("username") })
            console.log(data)
            if (data.success) {
                setOrders(data.orders)
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

    useEffect(() => { fetchOrders() }, [])

    return (
        <div class="py-6 p-md-6 p-lg-10">
            <h2 class="mb-6">Your Orders</h2>

            <div class="table-responsive-xxl border-0">
                <table class="table mb-0 text-nowrap table-centered ">

                    <thead class="bg-light">
                        <tr>
                            <th>&nbsp;</th>
                            <th>Product</th>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Items</th>
                            <th>Status</th>
                            <th>Amount</th>

                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders == null ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                            orders.map(order =>
                                <tr>
                                    <td class="align-middle border-top-0 w-0">
                                        <a href="#"> <img src={"http://localhost/siyabrands/"+JSON.parse(order.ProductImages)[0]} alt="Ecommerce"
                                            class="icon-shape icon-xl" /></a>

                                    </td>
                                    <td class="align-middle border-top-0">

                                        <a href="#" class="fw-semi-bold text-inherit">
                                            <h6 class="mb-0">{order.ProductName}</h6>
                                        </a>
                                        <span><small class="text-muted">{order.size}</small></span>

                                    </td>
                                    <td class="align-middle border-top-0">
                                        <a href="#" class="text-inherit">#{order.id}</a>

                                    </td>
                                    <td class="align-middle border-top-0">
                                        {order.createdon}

                                    </td>
                                    <td class="align-middle border-top-0">
                                        {order.quantity}

                                    </td>
                                    <td class="align-middle border-top-0">
                                        <span class="badge bg-warning">{order.status}</span>
                                    </td>
                                    <td class="align-middle border-top-0">
                                        {order.salePrice*order.quantity}
                                    </td>
                                    <td class="text-muted align-middle border-top-0">
                                        <a href="#" class="text-inherit" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="View"><i class="feather-icon icon-eye"></i></a>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders