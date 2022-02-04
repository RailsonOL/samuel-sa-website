import { useState } from 'react'
import Link from 'next/link'
import SearchBar from '../searchbar/SeachBar'

const HeaderBarMobile = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const leftMenu = openedMenu ? 0 : -100

  return (
    <div className='menu-head-mobile'>
      <div className='open-menu-header'>
        <button className='btn-menu material-icons' onClick={() => setOpenedMenu(!openedMenu)}>menu</button>
        <div className='logo'>
          <a href='/'>
            <img src={'/images/logo.svg'} alt='' />
          </a>
        </div>
      </div>
      <div className='mobile-content-header' style={{ left: leftMenu + '%' }}>
        <SearchBar fromMobile={{ setOpenedMenu, openedMenu }} />
        <div>
          <ul>
            <li className='item-menu home-icon icons' onClick={() => setOpenedMenu(!openedMenu)}>
              <Link href='/'>Inicio</Link>
            </li>
            <li className='item-menu movie-icon icons'>
              <Link href='/'>LINK</Link>
            </li>
            <li className='item-menu movie-icon icons'>
              <Link href='/'>LINK</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderBarMobile
