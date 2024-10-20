import React from 'react'
import TotalCart from '../../CartComponents/TotalCart'
import useStorage from '../../CostumHook/useStorage'
import CartItem from '../../CartComponents/CartItem'


const Cart = () => {

  const { items } = useStorage('cart'); // i prodotti nel carrello nel localStorage
  // console.log(items)

  return (

    <div >

      <TotalCart />
      {items.map((el) => {
        return <CartItem key={el.id} {...el} />
      })

      }


    </div>
  )
}

export default Cart

