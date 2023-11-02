import React from 'react'
import ProductMain from './components/ProductMain'
import ProductAccordian from './components/ProductAccordian'

function ProductPage(props) {
  return (
    <>
      <section>
        <div className='container'>
          <div><button className='btn btn-primary mt-2' onClick={()=>props.setProductInfo(null)}><i class="fa fa-arrow-left"></i> Go Back</button></div>
          <ProductMain product={props.product}></ProductMain>
          <ProductAccordian product={props.product}></ProductAccordian>
        </div>
      </section>
    </>
  )
}

export default ProductPage