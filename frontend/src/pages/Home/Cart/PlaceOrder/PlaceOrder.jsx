import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../../Context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Informações da Entrega</p>
        <div className="multi-fields">
          <input type="text" placeholder='Primeiro nome'/>
          <input type="text" placeholder='Último nome'/>
        </div>
        <input type="email" placeholder='Endereço de email'/>
        <input type="text" placeholder='Rua'/>
        <div className="multi-fields">
          <input type="text" placeholder='Cidade'/>
          <input type="text" placeholder='Estado'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='CEP'/>
          <input type="text" placeholder='País'/>
        </div>
        <input type="text" placeholder='Telefone'/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total do Carrinho</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>R$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Preço da Corrida(Fixo)</p>
              <p>R$ {12.90}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b><p>Total</p></b>
              <b><p>R$ {getTotalCartAmount()===0?0:getTotalCartAmount()+12.9}</p></b>
            </div>
          </div>
          <button>FINALIZAR PAGAMENTO</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
