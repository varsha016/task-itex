// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllProductAction } from '../redux/action/productAction'

// const Home = () => {
//     const dispatch = useDispatch()
//     const { productdata } = useSelector(state => state.allProducts)


//     useEffect(() => {


//         dispatch(getAllProductAction())
//     }, [])


//     return (<>
//         <pre>{JSON.stringify(productdata, null, 2)}</pre>
//         <div>Home</div>
//         {
//             productdata && productdata.map(item => <div>{item?.description}</div>)
//         }
//         {products && products?.map((item, i) => <>
//             <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//                 <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item?.thumbnail} alt="" />
//                 <div class="flex flex-col justify-between p-4 leading-normal">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                 </div>
//             </a>

//         </>)}
//     </>
//     )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductCart from './ProductCart'
import getAllProductAction from '../redux/action/productAction'


function Home() {
    const { products, deleteProducts } = useSelector(state => state.allProducts)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)




    useEffect(() => {
        setLoading(true)

        dispatch(getAllProductAction())


        setLoading(false)
    }, [deleteProducts])
    return (<>

        <div className="container">
            <div className="row">

                {
                    products && products.map((item, i) => <div className='col-3' key={item.id}>

                        {loading
                            ? <div className="spinner-border"></div>
                            : <ProductCart product={item} />
                        }

                    </div>

                    )
                }


            </div>








        </div>



    </>

    )
}

export default Home