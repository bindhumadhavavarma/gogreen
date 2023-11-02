import React from 'react'
import CategoryCard from './CategoryCard'

function CategoryWiseCards() {
    return (
        <>
            <section>
                <div className="container mt-10 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <h4 className='text-center'>Spices</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                    </div>
                </div>
                <div className="container mt-10 mb-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <h4 className='text-center'>Organic Products</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 g-lg-4">
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                        <CategoryCard></CategoryCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryWiseCards