import HeaderBar from './HeaderBar'
import HeaderBarMobile from './HeaderBarMobile'

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://psdflyerbr.net/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-15-at-19.23.10.jpeg)'
      }} />

      <div className="content-header">
      <HeaderBarMobile />
      <HeaderBar />
      </div>
    </div>
  )
}

export default HeaderMain
