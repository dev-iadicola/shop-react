import React from 'react'
import CartList from '../../CartComponents/CartList'
import TotalCart from '../../CartComponents/TotalCart'
import useStorage from '../../CostumHook/useStorage'


const Cart = () => {

  const { items } = useStorage('cart'); // i prodotti nel carrello nel localStorage
  // console.log(items)

  return (

    <div >

      <TotalCart />
      {items.map((el) => {
        return <CartList key={el.id} {...el} />
      })

      }


    </div>
  )
}

export default Cart

