import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating'
import { AxiosPost, UserContext } from '../../../../context/UserContext';
import { pushNotify } from '../../../components/pushNotify';
import { ScaleLoader } from 'react-spinners';
import DisplayStars from './DisplayStars';

function ProductAccordian(props) {
    const initialFormData = { title: "", description: "", stars: 0, userid: localStorage.getItem("username"), productid: props.product.productId }
    const [writeReview, setWriteReview] = useState({ ...initialFormData, show: false })
    const [isLoading, setIsLoading] = useState(false)
    const [reviews, setReviews] = useState(null)
    const [stats, setStats] = useState({ avg: "Loading...", total: "Loading..." })
    const { user } = useContext(UserContext)

    const addReview = async () => {
        try {
            setIsLoading(true)
            console.log(writeReview)
            const data = await AxiosPost('add_reviews.php', writeReview)
            console.log(data)
            if (data.success) {
                pushNotify("success", "Success", "Review added successfully.")
                setWriteReview({ ...initialFormData, show: false })
                await fetchReview()
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

    const onChangeHandler = (e) => {
        setWriteReview({ ...writeReview, [e.target.name]: e.target.value })
    }

    const fetchReview = async () => {
        try {
            setIsLoading(true)
            console.log(writeReview)
            const data = await AxiosPost('fetch_reviews_pid.php', { id: props.product.productId })
            console.log(data)
            if (data.success) {
                setReviews(data.reviews)
                setStats(data.stats)
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

    useEffect(() => { fetchReview() }, [])

    return (

        <section class="mt-3 ">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="nav nav-pills nav-lb-tab" id="myTab" role="tablist">

                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="product-tab" data-bs-toggle="tab"
                                    data-bs-target="#product-tab-pane" type="button" role="tab" aria-controls="product-tab-pane"
                                    aria-selected="true">Product Details</button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="details-tab" data-bs-toggle="tab"
                                    data-bs-target="#details-tab-pane" type="button" role="tab" aria-controls="details-tab-pane"
                                    aria-selected="false">Information</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sellerInfo-tab" data-bs-toggle="tab"
                                    data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane"
                                    aria-selected="false" >Reviews</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="myTabContent">

                            <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="product-tab"
                                tabindex="0">
                                <div class="my-8" dangerouslySetInnerHTML={{ __html: props.product.description }}>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="details-tab-pane" role="tabpanel" aria-labelledby="details-tab" tabindex="0">
                                <div class="my-8">
                                    <div class="row">
                                        <div class="col-12">
                                            <h4 class="mb-4">Details</h4>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <table class="table table-striped">

                                                <tbody>
                                                    <tr>
                                                        <th>Weight</th>
                                                        <td>{props.product.weights}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Ingredient Type</th>
                                                        <td>Vegetarian</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Brand</th>
                                                        <td>Siya Brand</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Item Package Quantity</th>
                                                        <td>1</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Manufacturer</th>
                                                        <td>Siya Brand</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="col-12 col-lg-6">
                                            <table class="table table-striped">

                                                <tbody>
                                                    <tr>
                                                        <th>Date First Available</th>
                                                        <td>{props.product.createdOn}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Generic Name</th>
                                                        <td>{props.product.productName}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                <div class="my-8">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="me-lg-12 mb-6 mb-md-0">
                                                <div class="mb-5">
                                                    <h4 class="mb-3">Customer reviews</h4>
                                                    <span>
                                                        <span class="ms-3">{stats.avg} out of 5</span><br />
                                                        <small class="ms-3">{stats.total} global ratings</small>
                                                    </span>
                                                </div>
                                                <div class="d-grid">
                                                    <h4>Review this product</h4>
                                                    <p class="mb-0">Share your thoughts with other customers.</p>
                                                    <a href="#" class="btn btn-outline-gray-400 mt-4 text-muted" onClick={() => { setWriteReview({ ...writeReview, show: true }) }}>Write a Review</a>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="col-md-8">

                                            <div class="mb-10" style={{ maxHeight: "600px", overflowY: "scroll", paddingRight: "20px" }}>
                                                <div class="d-flex justify-content-between align-items-center mb-8">
                                                    <div>

                                                        <h4>Reviews</h4>
                                                    </div>

                                                </div>
                                                {isLoading || reviews == null ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                                                    reviews.map(review =>
                                                        <div class="d-flex border-bottom pb-6 mb-6">
                                                            <img src={"https://ui-avatars.com/api/?name=" + review.firstname + "+" + review.lastname + "&background=random"} alt=""
                                                                class="rounded-circle avatar-lg" />
                                                            <div class="ms-5">
                                                                <h6 class="mb-1">
                                                                    {review.firstname} {review.lastname}

                                                                </h6>


                                                                <p class="small"> <span class="text-muted">{review.createOn}</span>
                                                                    <span class="text-primary ms-3 fw-bold">Verified Purchase</span></p>

                                                                <div class=" mb-2">
                                                                    <DisplayStars value={review.rating}></DisplayStars> <br />
                                                                    <span class="text-dark fw-bold">{review.title}</span>
                                                                </div>

                                                                <p>{review.reviewdesc}</p>
                                                            </div>
                                                        </div>
                                                    )

                                                }

                                            </div>
                                            <Modal className="fade" size='l' show={writeReview.show} centered>
                                                <Modal.Header>
                                                    <Modal.Title>Review Product</Modal.Title>
                                                    <Button
                                                        onClick={() => setWriteReview({ show: false })}
                                                        variant=""
                                                        className="btn-close"
                                                    >

                                                    </Button>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {user == null ? "Please Login to Review this product." : isLoading ? <div className="row mx-0" style={{ height: "100%" }}><ScaleLoader cssOverride={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }} /></div> :
                                                        <>

                                                            <div class="border-bottom py-4 mb-4">
                                                                <h4 class="mb-3">Overall rating</h4>
                                                                <Rating
                                                                    onClick={(e) => setWriteReview({ ...writeReview, stars: e })}
                                                                /* Available Props */
                                                                />
                                                            </div>
                                                            <div class="border-bottom py-4 mb-4">
                                                                <h5>Add a Title</h5>
                                                                <input type="text" class="form-control" value={writeReview.title} name='title' onChange={onChangeHandler} />
                                                            </div>
                                                            <div class=" py-4 mb-4">

                                                                <h5>Add a written review</h5>
                                                                <textarea value={writeReview.description} name='description' onChange={onChangeHandler} class="form-control" rows="3"
                                                                    placeholder="What did you like or dislike? What did you use this product for?"></textarea>

                                                            </div>
                                                        </>
                                                    }
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <button type="button" class="btn btn-primary" onClick={addReview}>Submit</button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default ProductAccordian