import React, { useContext, useEffect, useState } from 'react'
import pic from "../../../../assets/images/banner/assortment-citrus-fruits.png"
import { AxiosPost, UserContext } from '../../../../context/UserContext'
import { pushNotify } from '../../../components/pushNotify'
function SideBar() {
    const [isLoading, setIsLoading] = useState(false)
    const [categoryTree, setCategoryTree] = useState(null)
    const { setCategoryFilter, setSearchFilter , searchFilter} = useContext(UserContext)

    const fetchCategoryTree = async () => {
        try {
            setIsLoading(true)
            const data = await AxiosPost('fetch_category_tree.php')
            console.log(data)
            if (data.success) {
                setCategoryTree(data.categories)
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

    useEffect(() => { fetchCategoryTree() }, [])

    return (
        <>
            <div className="mb-8 mt-8">
                <h5 className="mb-3">Categories</h5>
                <ul className="nav nav-category" id="categoryCollapseMenu">
                    <li className="nav-item border-bottom w-100 " ><a href="#" onClick={() => setCategoryFilter("All Products")}
                        className="nav-link collapsed" data-bs-toggle="collapse"
                        data-bs-target="#allproducts" aria-expanded="false" aria-controls="allproducts">All Products <i class="fa fa-arrow-right"></i></a>
                        <div id="allproducts" className="accordion-collapse collapse"
                            data-bs-parent="#categoryCollapseMenu">
                            
                        </div>
                    </li>
                    {categoryTree == null ? null :
                        categoryTree.map(category =>
                            <li className="nav-item border-bottom w-100 " ><a href="#" onClick={() => setCategoryFilter(category.Category_Name)}
                                className="nav-link collapsed" data-bs-toggle="collapse"
                                data-bs-target={`#${category.ID}`} aria-expanded="false" aria-controls={category.ID}>{category.Category_Name} <i class="fa fa-arrow-right"></i></a>
                                <div id={category.ID} className="accordion-collapse collapse"
                                    data-bs-parent="#categoryCollapseMenu">
                                    <div>
                                        <ul className="nav flex-column ms-3">
                                            {
                                                category.children.map(subcategory => <li className="nav-item"><a href="#!" onClick={() => setCategoryFilter(subcategory.SubcategoryName)} className="nav-link">{subcategory.SubcategoryName}</a></li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="mb-8">

                <h5 className="mb-3">Search</h5>
                <div className="my-4">

                    <input type="search" className="form-control" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)} placeholder="Search in current Products" />
                </div>
            </div>
            <div className="mb-8 position-relative">


                <div className="position-absolute p-5 py-8">
                    <h3 className="mb-0">Fresh Fruits </h3>
                    <p>Get Upto 25% Off</p>
                    <a href="#" className="btn btn-dark">Shop Now<i className="feather-icon icon-arrow-right ms-1"></i></a>
                </div>


                <img src={pic} alt=""
                    className="img-fluid rounded " />

            </div>
        </>
    )
}

export default SideBar