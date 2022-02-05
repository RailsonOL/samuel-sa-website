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

	<section className="pricing-table">
			<div className="container">
				<div className="block-heading">
					<h2>ADQUIRA ACESSO A MELHOR PLATAFORMA PARA DESIGNERS</h2>
					<p>Satisfação garantida ou seu dinheiro de volta (em até 7 dias).</p>
				</div>
				<div className="row justify-content-md-center">
					<div className="col-md-5 col-lg-4">
						<div className="item">
							<div className="heading">
								<h3>BASICO</h3>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<div className="features">
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">+ 1398 PSD DISPONÍVEIS</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Atualizações diárias durante 1 mês</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Fontes</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Tutoriais</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Grupo no Whatsapp</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Pack de Bônus</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Sorteio</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Suporte</span></h4>
							</div>
							<div className="price">
								<h4>R$ 27,90</h4>
							</div>
							<button className="btnmod btnmod-block btnmod-outline-primary">ASSINAR</button>
						</div>
					</div>
					<div className="col-md-5 col-lg-4">
						<div className="item">
							<div className="ribbon">MELHOR PREÇO</div>
							<div className="heading">
								<h3>PRO</h3>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<div className="features">
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">+ 1398 PSD DISPONÍVEIS</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Atualizações diárias durante 1 mês</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Fontes</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Tutoriais</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Grupo no Whatsapp</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Pack de Bônus</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Sorteio</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Suporte</span></h4>
							</div>
							<div className="price">
								<h4>R$ 75,90</h4>
							</div>
							<button className="btnmod btnmod-block btnmod-outline-primary">ASSINAR</button>
						</div>
					</div>
					<div className="col-md-5 col-lg-4">
						<div className="item">
							<div className="heading">
								<h3>PREMIUM</h3>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<div className="features">
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">+ 1398 PSD DISPONÍVEIS</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Atualizações diárias durante 1 mês</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Fontes</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Tutoriais</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Grupo no Whatsapp</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Pack de Bônus</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Sorteio</span></h4>
								<h4><span className="material-icons md-18">check_circle</span> <span className="value">Suporte</span></h4>
							</div>
							<div className="price">
								<h4>R$ 229,90</h4>
							</div>
							<button className="btnmod btnmod-block btnmod-outline-primary">ASSINAR</button>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
  )
}

export default MyApp
