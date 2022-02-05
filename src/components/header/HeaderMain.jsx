import HeaderBar from './HeaderBar'
import HeaderBarMobile from './HeaderBarMobile'

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="content-header">
      <HeaderBarMobile />
      <HeaderBar />
      </div>
    </div>
  )
}

export default HeaderMain
