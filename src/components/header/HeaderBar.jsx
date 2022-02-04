import Link from 'next/link'

const HeaderBar = () => {
  return (
    <div className='menu-head'>
      <ul>
        <li className='item-menu movie-icon icons'>
          <Link href='/'>LINK</Link>
        </li>

        <li className='item-menu movie-icon icons'>
          <Link href='/'>LINK</Link>
        </li>

        <li className='item-menu movie-icon icons'>
          <Link href='/'>LINK</Link>
        </li>

        <li className='item-menu movie-icon icons'>
          <Link href='/'>LINK</Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderBar
