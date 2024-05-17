import React, { useState } from "react";
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")

    return (
        <div className="login-popup">
            <form action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input type="text" placeholder="Digite seu nome" required/>}
                    <input type="email" placeholder="Digite seu email" required/>
                    <input type="password" placeholder="Digite sua senha" required/>
                </div>
                <button>{currState==="Cadastrar-se"?"Criar conta":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>Eu concordo com os termos de uso e política de privacidade</p>
                </div>
                {currState==="Login"
                ?<p>Criar uma nova conta? <span onClick={()=>setCurrState("Cadastrar-se")}>Clique aqui</span></p>
                :<p>Já tem uma conta? <span onClick={()=>setCurrState("Login")}>Entre aqui</span></p>}
                
            </form>
        </div>
    )
}

export default LoginPopup