import React from 'react'
import BestSellingProductCard from './BestSellingProductCard'
function BestSellingProducts() {
    return (
        <>
            <section>
                <div className='container mt-10 mb-5'>
                    <h4 className='text-center'>Best Selling Products</h4>
                    <div className="row">
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                        <BestSellingProductCard></BestSellingProductCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSellingProducts