import React, { useState } from 'react'

const ProductAdd = () => {
    const initialData = {

        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: "899",
        discountPercentage: "17.94",
        rating: "4.44",
        stock: "34",
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ],




    }
    const [addproduct, setAddproduct] = useState(initialData)
    return (<>
        <div className='flex justify-center align-center w-80'>
            <div className="relative p-6 ">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                        Thumbnail
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, thumbnail: e.target.value })}
                        value={addproduct.thumbnail} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, title: e.target.value })}
                        value={addproduct.title} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Description
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={e => setAddproduct({ ...addproduct, description: e.target.value })}
                        value={addproduct.description} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Price
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, price: e.target.value })}
                        value={addproduct.price} />
                    <label className="block text-black text-sm font-bold mb-1">
                        discountPercentage
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, discountPercentage: e.target.value })}
                        value={addproduct.discountPercentage} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Rating
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, rating: e.target.value })}
                        value={addproduct.rating} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Stock
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, stock: e.target.value })}
                        value={addproduct.stock} />
                    <label className="block text-black text-sm font-bold mb-1">
                        Brand
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, brand: e.target.value })}
                        value={addproduct.brand}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                        Category
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        onChange={e => setAddproduct({ ...addproduct, category: e.target.value })}
                        value={addproduct.category}
                    />
                    <button className=" mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">

                        add-Product
                    </button>

                </form>
            </div>

        </div>

    </>
    )
}

export default ProductAdd