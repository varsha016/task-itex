import React from 'react'
import { Link } from 'react-router-dom'

function ProductCart({ product }) {

    return <>

        <div className="card mt-5 " >
            <div className="card-body">
                <div className="card-header">
                    <h4 className='text-secondary'>{product.title}</h4>

                </div>
                <h2>{product.brand}</h2>
                <h6 className='fs-4'>{product.category}</h6>

                <p>You have Discount :- <span className='fs-4'>{product.discountPercentage}</span>  <strong className='text-success fs-5'> % off</strong></p>
                <p><img src={product.thumbnail} alt="" /></p>
                {/* <div className="container">
                    <div className="row">
                        {product.images.map((img, i) => <div className='col-sm-10 offset-1 ' key={img.id}>



                            <img src={img} alt="" className='img-fluid' />

                        </div>)}
                    </div>
                </div> */}
                <p className='fs-4'>Price :- ₹ <span>{product.price}</span></p>


                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>

                    <Link className='text-success nav-link' to={`/details/${product.id}`}>Product-Details </Link>
                </button>
            </div>

        </div>


    </>
}

export default ProductCart