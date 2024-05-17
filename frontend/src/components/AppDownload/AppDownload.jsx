import React from 'react'
import  './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
     <div className='app-download' id='app-download'>
      <p>Para uma Melhor Experiência, baixe nosso App! <br /> Prime Eat's App </p>
      <div className="app-download-plataforms">
        <img src={assets.play_store} alt="" />
        {/* <img src={assets.app_store} alt="" /> */}
      </div>
    </div>

  )
}

export default AppDownload
