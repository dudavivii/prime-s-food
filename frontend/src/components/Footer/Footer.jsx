import React from 'react'
import  './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p> Sua escolha número um em entrega de comida. Desfrute da conveniência de refeições deliciosas entregues diretamente à sua porta. Explore nosso cardápio variado e experimente pratos preparados com os melhores ingredientes. 
                    Aprecie cada momento e cada sabor com Prime Eats.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt= ''/>
                    <img src={assets.linkedin_icon} alt='' />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>ENTRE EM CONTATO</h2>
                <ul>
                    <li>+55 11 930316967</li>
                    <li>contato@primeeats.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 © Prime Eats. - Todos os direitos reservados.
 </p>
    </div>
  )
}

export default Footer
