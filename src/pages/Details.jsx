import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import getAllProductAction, { deleteSingleProductAction, getSingleProductAction, updateProductAction } from '../redux/action/productAction';
import Modal from './EditModal';


function Details() {
    const { singleProducts, deleteProducts, products } = useSelector(state => state.allProducts)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [editData, setEditData] = useState()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSingleProductAction(id))
    }, [])


    return <>

        <pre>{JSON.stringify(singleProducts, null, 2)}</pre>

        <div className=" bg-violet-100">
            <div className="container ">
                <div className="row">
                    <div className="col-sm-2  mt-5">
                        <div className="container">
                            <div className="row">
                                {singleProducts.images && singleProducts.images.map((img, i) => <div className='col-sm-10 offset-1 ' key={img.id}>

                                    <img src={img} alt="img" className='img-fluid' style={{ marginBottom: "10px" }} height={100} width={100} />
                                </div>)}
                                <h4 className='text-secondary'>{singleProducts.title}</h4>
                            </div>
                        </div>
                    </div>
                    {singleProducts && <div className="col-sm-4 mt-5">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg p-3">
                            <p> Brand : <strong className='fs-4'>{singleProducts.brand}</strong></p>
                            <p className='mt-2'><img src={singleProducts.thumbnail} alt="product" height={400} width={400} /></p>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2"> {singleProducts.category}</div>
                                <p class="text-gray-700 text-base">
                                    <p className="mb-2">{singleProducts.description}</p>

                                    <p className="mb-2">You have Discount :- <span className='fs-4'>{singleProducts.discountPercentage}</span>  <strong className='text-success fs-5'> % off</strong></p>

                                    <p className="mb-2">Price :- <span className='font-bold' >₹  {singleProducts.price}</span></p>
                                    <p className="mb-2">Staock :- {singleProducts.stock}</p>
                                    <p className='flex'>

                                        Reting :- <span className='font-bold fs-5 flex'>{singleProducts.rating}

                                            <svg className="h-5 w-5 text-yellow-600" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                                            <svg className="h-5 w-5 text-yellow-600" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                                            <svg className="h-5 w-5 text-yellow-600" width="14" height="14" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>

                                        </span>
                                    </p>
                                </p>
                            </div>
                            <div class="px-6 pt-4 pb-2">

                                <button className="bg-red-500 text-black active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                    type="button"

                                    onClick={e => {
                                        dispatch(deleteSingleProductAction(singleProducts.id))

                                        alert("YOUR PRODUCT IS DELETED")
                                    }}>
                                    <svg class="h-6 w-8  text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                                <button type="button" className="bg-yellow-500  active:bg-blue-500 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" onClick={e => {
                                    setShowModal(true)

                                    setEditData(singleProducts)

                                }} >
                                    <svg class="h-6 w-8 text-white" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                                </button>
                            </div>
                        </div>


                    </div>}
                </div>
            </div>

        </div>

        {/* //////////modal//////////// */}
        {editData && <Modal setShowModal={setShowModal} showModal={showModal} setEditData={setEditData} editData={editData} />}





    </>
}

export default Details