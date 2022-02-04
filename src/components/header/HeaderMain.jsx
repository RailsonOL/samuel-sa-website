import HeaderBar from './HeaderBar'
import HeaderBarMobile from './HeaderBarMobile'

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="background-img">
        <img src={'https://psdflyerbr.net/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-15-at-19.23.10.jpeg'} alt="" />
      </div>
      <div className="content-header">
      <HeaderBarMobile />
      <HeaderBar />
      </div>
    </div>
  )
}

export default HeaderMain
