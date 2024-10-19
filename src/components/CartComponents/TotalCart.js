import React from 'react'
import { useGlobalContext } from '../context/context'

const TotalCart = () => {

  const {total} = useGlobalContext()
  return (
    <article className=' col-12 col-md-12 col-lg-4 me-auto my-2 py-2 px-0'>
      <div className="" >
       
       <button className="btn my-4 w-50 rounded-0" > 
        Checkout
       </button>
    
        <div className=" mx-auto my-5">
          <h3>€ {total}</h3>
        </div>
      </div>


    </article>
  )
}

export default TotalCart