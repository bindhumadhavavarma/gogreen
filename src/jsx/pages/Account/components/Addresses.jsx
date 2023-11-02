import React, { useEffect, useState } from 'react'
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
import { ScaleLoader } from 'react-spinners';
import $ from 'jquery'
import { Modal, Button } from 'react-bootstrap';

function Addresses() {
    const [isLoading, setIsLoading] = useState(false)
    const [addresses, setAddr] = useState(null)
    const initformdata = { name: '', addrLine1: '', addrLine2: '', name: '', city: '', country: '', state: '', pincode: '', isDefault: false, userid: localStorage.getItem("username") }
    const [formData, setFormData] = useState(initformdata)
    const [deleteId, setDeleteId] = useState({ show: false, id: null })

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

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const addAddress = async (e) => {
        console.log(formData)
        e.preventDefault()
        try {
            setIsLoading(true)
            const data = await AxiosPost('add_addresses.php', formData)
            console.log(data)
            if (data.success) {
                pushNotify("success", "Success", "Address added successfully")
                setFormData(initformdata)
                await fetchAddrs()
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

    const deleteAddress = async (e) => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('delete_addresses.php', { id: deleteId.id })
            console.log(data)
            if (data.success) {
                await fetchAddrs()
                pushNotify("success", "Success", "Address deleted successfully")
                setDeleteId({ show: false, id: null })
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

    return (
        <>
            <div class="py-6 p-md-6 p-lg-10">
                <div class="d-flex justify-content-between mb-6">
                    <h2 class="mb-0">Address</h2>
                    <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addAddressModal">Add a
                        new address </a>
                </div>
                <div class="row">
                    {
                        isLoading || addresses == null ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                            addresses.map(address =>
                                <div class="col-lg-5 col-xxl-4 col-12 mb-4">
                                    <div class="card">
                                        <div class="card-body p-6">
                                            <div class="text-capitalize text-bold mb-4" style={{ fontWeight: "bold" }}>
                                                {address.name}
                                            </div>

                                            <p class="mb-6">{address.addrLine1}<br />

                                                {address.addrLine2} <br />

                                                {address.city} {address.state}<br />

                                                {address.country} {address.pincode}</p>
                                            <div class="mt-4">
                                                <a href="#" class="text-danger ms-3"onClick={() => { setDeleteId({ show: true, id: address.id }); }} >Delete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                    }
                </div>
            </div>

            <Modal className="fade" size='l' show={deleteId.show} centered>
                <Modal.Header>
                    <Modal.Title>Delete address</Modal.Title>
                    <Button
                        onClick={() => setDeleteId({ show: false, id: '' })}
                        variant=""
                        className="btn-close"
                    >

                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <h6>Are you sure you want to delete this address?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-gray-400" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" onClick={deleteAddress}>Delete</button>
                </Modal.Footer>
            </Modal>
            <div class="modal fade" id="addAddressModal" tabindex="-1" aria-labelledby="addAddressModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">

                    <div class="modal-content">

                        <div class="modal-body p-6">
                            <div class="d-flex justify-content-between mb-5">
                                <div>
                                    <h5 class="mb-1" id="addAddressModalLabel">New Shipping Address</h5>
                                    <p class="small mb-0">Add new shipping address for your order delivery.</p>
                                </div>
                                <div>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                            <form onSubmit={(e) => addAddress(e)}>
                                {isLoading ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="Name" value={formData.name} name='name' onChange={onChangeHandler} required />
                                        </div>

                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="Address Line 1" value={formData.addrLine1} name='addrLine1' onChange={onChangeHandler} required />
                                        </div>

                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="Address Line 2" value={formData.addrLine2} name='addrLine2' onChange={onChangeHandler} required />
                                        </div>

                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="City" value={formData.city} name='city' onChange={onChangeHandler} required />
                                        </div>
                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="State" value={formData.state} name='state' onChange={onChangeHandler} required />
                                        </div>
                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="Country" value={formData.country} name='country' onChange={onChangeHandler} required />
                                        </div>

                                        <div class="col-12">
                                            <input type="text" class="form-control" placeholder="Zip Code" value={formData.pincode} name='pincode' onChange={onChangeHandler} required />
                                        </div>
                                        <div class="col-12 text-end">
                                            <button class="btn btn-primary" type="submit">Save Address</button>
                                        </div>
                                    </div>}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addresses