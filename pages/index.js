/* lib */
import Head from 'next/head'
/* compoents */

import GridItems from '../src/components/grid/GridItems'

const Home = () => {
  return (
    <div className='home-page'>
      <Head>

        <title>AmazoFlix - Filmes e Series de Graça</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charset="UTF-8" />
        <meta name="title" content="AmazoFlix - Filmes e Series de Graça" />
        <meta name="description" content="AmazoFlix - Filmes e Series de Graça" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://amazoflix.vercel.app/" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="Filmes e Series de Graça" />
        <meta property="og:image" content="" />
      </Head>

      <div className="logoMain tac">
          <img
            src={'/images/logo.svg'}
            alt=""
          />
        </div>

      <div className='container-main homepage-container'>
        <main className='grid-main'>

          <div className='container-grid'>
              <GridItems
            nameForGrid={'Ver mais'}
            toPage={'/a'}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
