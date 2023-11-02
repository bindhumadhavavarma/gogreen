import React, { useEffect, useState } from 'react'
import { AxiosPost } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
import pic1 from "../../../../assets/images/svg-graphics/visa.svg"
import pic2 from "../../../../assets/images/svg-graphics/mastercard.svg"
import pic3 from "../../../../assets/images/svg-graphics/discover.svg"
import { ScaleLoader } from 'react-spinners'
import { Modal, Button } from 'react-bootstrap';

function PaymentMethods() {
    const [isLoading, setIsLoading] = useState(false)
    const [methods, setMethods] = useState(null)
    const initformData = { cardType: '', name: '', month: '', year: '', cardNumber: '', cvv: '', userid: localStorage.getItem("username") }
    const [formData, setFormData] = useState(initformData)
    const [deleteId, setDeleteId] = useState({ show: false, id: null })

    const onChangeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
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

    useEffect(() => { fetchMethod() }, [])

    const addMethod = async (e) => {
        console.log(formData)
        e.preventDefault()
        try {
            setIsLoading(true)
            const data = await AxiosPost('add_payment_method.php', formData)
            console.log(data)
            if (data.success) {
                pushNotify("success", "Success", "Payment Method added successfully")
                setFormData(initformData)
                await fetchMethod()
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

    const deleteMethod = async (e) => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('delete_paymentmethod.php', { id: deleteId.id })
            console.log(data)
            if (data.success) {
                await fetchMethod()
                pushNotify("success", "Success", "Payment Method deleted successfully")
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
                <div class="d-flex justify-content-between mb-6 align-items-center">
                    <h2 class="mb-0">Payment Methods</h2>
                    <a href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#paymentModal">Add
                        Payment </a>

                </div>
                <ul class="list-group list-group-flush">
                    {isLoading || methods == null ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                        methods.map(method =>
                            <li class="list-group-item py-5 px-0">
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex">

                                        <img src={method.cardType == "visa" ? pic1 : method.cardType == "master" ? pic2 : pic3} alt="" />

                                        <div class="ms-4">
                                            <h5 class="mb-0 h6 h6">**** **** ****{method.cardNumber.substring(12)}</h5>
                                            <p class="mb-0 small">Expires on {method.month} {method.year}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" class="btn btn-outline-danger btn-sm" onClick={() => setDeleteId({ show: true, id: method.id })}>Remove</a>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header align-items-center d-flex">
                            <h5 class="modal-title" id="paymentModalLabel">
                                Add New Payment Method
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">

                            </button>
                        </div>
                        <div class="modal-body">
                            <div>
                                {isLoading ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                                    <form class="row mb-4" onSubmit={addMethod}>
                                        <div class="mb-3 col-12 col-md-12 mb-4">
                                            <h5 class="mb-3">Credit / Debit card</h5>
                                            <div class="d-inline-flex">
                                                <div class="form-check me-2">
                                                    <input type="radio" id="paymentRadioOne" value="visa" name="cardType" onChange={onChangeHandler} class="form-check-input" />
                                                    <label class="form-check-label" for="paymentRadioOne"><img
                                                        src={pic1} alt="" /></label>
                                                </div>
                                                <div class="form-check me-2">
                                                    <input type="radio" id="paymentRadioTwo" value="master" name="cardType" onChange={onChangeHandler} class="form-check-input" />
                                                    <label class="form-check-label" for="paymentRadioTwo"><img
                                                        src={pic2} alt="" /></label>
                                                </div>

                                                <div class="form-check">
                                                    <input type="radio" id="paymentRadioFour" value="discover" name="cardType" onChange={onChangeHandler} class="form-check-input" />
                                                    <label class="form-check-label" for="paymentRadioFour"><img src={pic3}
                                                        alt="" /></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mb-3 col-12 col-md-4">
                                            <label for="nameoncard" class="form-label">Name on card</label>
                                            <input id="nameoncard" type="text" class="form-control" value={formData.name} name="name" onChange={onChangeHandler} placeholder="Name" required />
                                        </div>
                                        <div class="mb-3 col-12 col-md-4">
                                            <label class="form-label">Month</label>
                                            <select class="form-select" value={formData.month} name="month" onChange={onChangeHandler} required>
                                                <option value="">Month</option>
                                                <option value="Jan">Jan</option>
                                                <option value="Feb">Feb</option>
                                                <option value="Mar">Mar</option>
                                                <option value="Apr">Apr</option>
                                                <option value="May">May</option>
                                                <option value="June">June</option>
                                                <option value="July">July</option>
                                                <option value="Aug">Aug</option>
                                                <option value="Sep">Sep</option>
                                                <option value="Oct">Oct</option>
                                                <option value="Nov">Nov</option>
                                                <option value="Dec">Dec</option>
                                            </select>
                                        </div>
                                        <div class="mb-3 col-12 col-md-4" >
                                            <label class="form-label">Year</label>
                                            <input type="text" class="form-control" value={formData.year} name="year" onChange={onChangeHandler} placeholder="Year" required />
                                        </div>
                                        <div class="mb-3 col-md-8 col-12">
                                            <label for="cc-mask" class="form-label">Card Number</label>
                                            <input type="text" class="form-control" placeholder="Card Number" required value={formData.cardNumber} name="cardNumber" onChange={onChangeHandler} />
                                        </div>
                                        <div class="mb-3 col-md-4 col-12">
                                            <div class="mb-3">
                                                <label for="cvv" class="form-label">CVV Code</label>
                                                <input type="password" class="form-control" placeholder="xxx" maxlength="3" value={formData.cvv} name="cvv" onChange={onChangeHandler} required />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <button class="btn btn-primary" type="submit">
                                                Add New Card
                                            </button>
                                            <button class="btn btn-outline-gray-400 text-muted ms-2" type="button" data-bs-dismiss="modal">
                                                Close
                                            </button>
                                        </div>
                                    </form>
                                }

                                <span><strong>Note:</strong> that you can later remove your card at
                                    the account setting page.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal className="fade" size='l' show={deleteId.show} centered>
                <Modal.Header>
                    <Modal.Title>Delete Payment Method</Modal.Title>
                    <Button
                        onClick={() => setDeleteId({ show: false, id: '' })}
                        variant=""
                        className="btn-close"
                    >

                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <h6>Are you sure you want to delete this Payment Method?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" class="btn btn-outline-gray-400" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-danger" onClick={deleteMethod}>Delete</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PaymentMethods