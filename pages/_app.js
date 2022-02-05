import '../styles/materialize.min.css'
import '../styles/globals.css'
import '../styles/App.css'
import '../styles/Movies.css'
import '../styles/App-responsive.css'
import '../styles/testes.css'
// import '../styles/font-awesome.css'
import '../styles/bootstrap.css'
/* pages */

import HeaderMain from '../src/components/header/HeaderMain'
import Footer from '../src/components/header/Footer'

function MyApp ({ Component, pageProps }) {
  return (
  <div>
    <HeaderMain />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp
