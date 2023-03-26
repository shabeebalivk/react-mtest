import React from 'react'
import menuIcon from '../assets/images/menu.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import notification from '../assets/images/notification.png'
import user from '../assets/images/user.png'

const MenuIcons = () => {
  return (
    <div className='icons-container'>
        <img src={menuIcon} height={53} width={52} alt="menu"/>
        <img src={icon2} height={53} width={52} alt="menu"/>
        <img src={icon3} height={53} width={52} alt="menu"/>
        <img src={icon4} height={53} width={52} alt="menu"/>
        <img src={icon5} height={53} width={60} alt="menu"/>
        <img src={icon6} height={53} width={52} alt="menu"/>
        <img className='notification-icon' src={notification} height={32} width={32} alt="menu"/>
        <img src={user} height={33} width={33} alt="menu"/>
    </div>
  )
}

export default MenuIcons