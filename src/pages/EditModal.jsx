import React from "react";
import { useDispatch } from "react-redux";
import { updateProductAction } from "../redux/action/productAction";

const Modal = ({ setShowModal, showModal, editData, setEditData }) => {
    const dispatch = useDispatch()

    return (
        <>

            <button
                className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Fill Details
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">General Info</h3>
                                    <button
                                        className="bg-transparent border-0 text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Thumbnail
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, thumbnail: e.target.value })}
                                            value={editData.thumbnail} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Title
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, title: e.target.value })}
                                            value={editData.title} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Description
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" onChange={e => setEditData({ ...editData, description: e.target.value })}
                                            value={editData.description} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Price
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, price: e.target.value })}
                                            value={editData.price} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            discountPercentage
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, discountPercentage: e.target.value })}
                                            value={editData.discountPercentage} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Rating
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, rating: e.target.value })}
                                            value={editData.rating} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Stock
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, stock: e.target.value })}
                                            value={editData.stock} />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Brand
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, brand: e.target.value })}
                                            value={editData.brand}
                                        />
                                        <label className="block text-black text-sm font-bold mb-1">
                                            Category
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                                            onChange={e => setEditData({ ...editData, category: e.target.value })}
                                            value={editData.category}
                                        />

                                    </form>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button

                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() =>
                                            setShowModal(false)

                                        }
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => {
                                            setShowModal(false)
                                            dispatch(updateProductAction(editData))
                                        }

                                        }
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;