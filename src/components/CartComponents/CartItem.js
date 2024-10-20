import React, { useEffect } from 'react'
import useStorage from '../CostumHook/useStorage'
import { MdCarCrash, MdDelete, MdFolderDelete, MdRemoveDone, MdRemoveShoppingCart, MdShop, MdShoppingCart, MdShopTwo } from 'react-icons/md'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const CartItem = ({ title, category, image, price }) => {

  // const states = useGlobalContext()
  // console.log(states)

  return (
    <article>
  <div className="card text-center d-flex flex-md-row flex-column align-items-center ">
    {/* Articolo */}
    <div className="  d-flex flex-md-row flex-column justify-content-between 
    col-md-6 col-12 mb-3 px-5 
    align-items-center" >
    <img src={image} alt={title} className="img-fluid m-2" style={{ maxHeight: '150px', objectFit: 'contain' }} />

     <div className="">
     <h6 className="card-title">{title}</h6>
     <p className="card-text">{category}</p>
     </div>
      <h3>€{price}</h3>
    </div>

    {/* Bottoni aggiungi rimuovi*/}

    <div className="d-flex flex-row align-items-center justify-content-center gap-3 col-md-4 col-12
     mb-md-0 mb-5 ">
      <div className="d-flex align-items-center d-flex justify-content-between ">
        <button className="btn bg-warning ">
        <FaMinusSquare className="icon me-2 " style={{ color: 'red' }} />
        <span className=' '>Remove</span>
        </button>
      </div>

     <div className='pt-3'>
     <p className='fs-6 border border-secondary rounded px-1'>Quantità: 1</p>
     </div>
      <div className="d-flex align-items-center d-flex justify-content-between">
        <button className="btn bg-info">
        <FaPlusSquare className="icon me-2" />
        <span className=''>Add</span>
        </button>
      </div>

        {/* Bottoni azioni*/}
    <div className="d-flex flex-column align-items-center justify-content-center gap-3 col-md-4 col-12">
      <div className="d-flex align-items-center ">
        <button className="btn bg-danger">
        <MdDelete className="icon me-2 " style={{ color: 'red' }} />
        <span className='fs-6'>Delete</span>
        </button>
      </div>
      
      <div className="d-flex align-items-center">
        <button className="btn bg-success ">
        <MdShop className="icon me-2" />
        <span className='fs-6'>Buy Now</span>
        </button>
      </div>
    </div>
    </div>

  
  </div>
</article>

  )
}

export default CartItem