import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

    const {cartItems,food_list,removeFromCart, getTotalCartAmount} = useContext(StoreContext);

    const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Itens</p>
          <p>Nome</p>
          <p>Preço(R$)</p>
          <p>Quantidade</p>
          <p>Total(R$)</p>
          <p>Remover produto</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
            {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt=''/>
                    <p>{item.name}</p>
                    <p>R$ {item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>R$ {item.price*cartItems[item._id]}</p>
                    <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
                
     
              )
            }
        })}
      </div>
      <div className='cart-bottom'>
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
          <button onClick={()=>navigate('/order')}>PROCEDER PRO PAGAMENTO</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Use seu código de desconto aqui!</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='Código da Promoção' />
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
