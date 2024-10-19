import React, { useEffect } from 'react'
import useStorage from '../CostumHook/useStorage'
import { MdRemoveShoppingCart, MdShop, MdShoppingCart, MdShopTwo } from 'react-icons/md'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'
import { useGlobalContext } from '../context/context'

const CartList = ({ title, category, image, price }) => {

  // const states = useGlobalContext()
  // console.log(states)

  return (
    <article>
  <div className="card text-center d-flex flex-md-row flex-column align-items-center">
    {/* Articolo */}
    <div className="card-body d-flex flex-md-row flex-column justify-content-between col-md-6 col-12 mb-3 px-5 
    align-items-center">
    <img src={image} alt={title} className="img-fluid m-2" style={{ maxHeight: '150px', objectFit: 'contain' }} />

     <div className="col">
     <h6 className="card-title">{title}</h6>
     <p className="card-text">{category}</p>
     </div>
      <h3>€{price}</h3>
    </div>

    {/* Bottoni aggiungi rimuovi*/}

    <div className="d-flex flex-column align-items-center justify-content-center gap-3 col-md-4 col-12 mb-md-0 mb-5">
      <div className="d-flex align-items-center d-flex justify-content-between">
        <FaMinusSquare className="icon me-2" style={{ color: 'red' }} />
        <span>Remove</span>
      </div>
      <div className="d-flex align-items-center d-flex justify-content-between">
        <FaPlusSquare className="icon me-2" />
        <span>Add</span>
      </div>
    </div>

    {/* Bottoni azioni*/}
    <div className="d-flex flex-column align-items-center justify-content-center gap-3 col-md-4 col-12">
      <div className="d-flex align-items-center ">
        <MdRemoveShoppingCart className="icon me-2" style={{ color: 'red' }} />
        <span>Delete</span>
      </div>
      <div className="d-flex align-items-center">
        <MdShop className="icon me-2" />
        <span>Buy Now</span>
      </div>
    </div>
  </div>
</article>

  )
}

export default CartList