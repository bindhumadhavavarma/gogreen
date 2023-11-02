import React from 'react'
import ProductCard from './components/ProductCard'
import SideBar from './components/SideBar'
import ProductsGrid from './components/ProductsGrid'

function Shop() {
    return (
        <>
            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <SideBar></SideBar>
                        </div>
                        <div className='col-lg-9 col-12'>
                            <ProductsGrid></ProductsGrid>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Shop