import React from 'react'
import './WhatsApp.css';
import whatsapp from '../../assets/whatsapp.webp'
function WhatsApp() {
  return (
    <div>

    <a href="https://wa.me/919348228808?text=How can I help you ?" target='_blank' id="whatsapp-button">
      <img src={whatsapp} alt="WhatsApp" />
    </a>

  </div>
  )
}

export default WhatsApp
