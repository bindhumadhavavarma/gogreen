import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { AxiosPost, UserContext } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
import ProductPage from '../../ProductPage/ProductPage'

function ProductsGrid() {
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const { categoryFilter,searchFilter } = useContext(UserContext)
    const [productInfo, setProductInfo] = useState(null)

    const regex = new RegExp(searchFilter, 'i');

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_allproducts.php')
            if (data.success) {
                setProducts(data.products)
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

    useEffect(() => { fetchProducts() }, [])

    const filterProducts = (product) => {
        if(categoryFilter=="All Products")return true
        else {
            if(categoryFilter==product.categoryName || categoryFilter==product.SubcategoryName)return true
            else return false
        }
    }

    return (
        <>
            {productInfo == null ?
                <section className='mt-8'>
                    <div className="card mb-4 bg-light border-0">
                        <div className=" card-body p-9">
                            <h2 className="mb-0 fs-1">{categoryFilter}</h2>
                        </div>
                    </div>
                    <div className="d-lg-flex justify-content-between align-items-center">
                        <div className="mb-3 mb-lg-0">
                            <p className="mb-0"> <span className="text-dark">
                                {products == null ? "Loading Products...." : products.filter(filterProducts).length + " Products found."}
                            </span></p>
                        </div>
                        <div className="d-md-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>

                                    <a href="shop-list.html" className="text-muted me-3"><i className="bi bi-list-ul"></i></a>
                                    <a href="shop-grid.html" className=" me-3 active"><i className="bi bi-grid"></i></a>
                                    <a href="shop-grid-3-column.html" className="me-3 text-muted"><i className="bi bi-grid-3x3-gap"></i></a>
                                </div>
                                <div className="ms-2 d-lg-none">
                                    <a className="btn btn-outline-gray-400 text-muted" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-filter me-2">
                                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                    </svg> Filters</a>
                                </div>
                            </div>

                            <div className="d-flex mt-2 mt-lg-0">
                                <div>
                                    <select className="form-select">
                                        <option selected>Sort by: Featured</option>
                                        <option value="Low to High">Price: Low to High</option>
                                        <option value="High to Low"> Price: High to Low</option>
                                        <option value="Release Date"> Release Date</option>
                                        <option value="Avg. Rating"> Avg. Rating</option>
                                    </select></div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
                        {
                            isLoading || products == null ? null :
                                products.filter((product)=>{return filterProducts(product) && regex.test(product.ProductName)}).map(product => <ProductCard setProductInfo={setProductInfo} product={product}></ProductCard>)
                        }
                    </div>
                </section> : <ProductPage setProductInfo={setProductInfo} product={productInfo}  />}


        </>
    )
}

export default ProductsGrid