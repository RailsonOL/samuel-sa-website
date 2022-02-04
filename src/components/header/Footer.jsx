/* eslint-disable no-tabs */
import Link from 'next/link'

const Footer = () => {
  return (
		<footer className="container-footer">
			<nav className='footer-normal-links'>
				<ul>
					<li>
						<Link href={'/direitos'}>Aviso Legal / Copyright</Link>
					</li>
				</ul>
			</nav>
			<p className='footer-phrase'>alguma coisa</p>
			<nav className='footer-bottons'>
				<ul>
					<li className='ft-btn'>
						<Link href={'/'}>LINK</Link>
					</li>
					<li className='ft-btn'>
						<Link href={'/'}>LINK</Link>
					</li>
					<li className='ft-btn'>
						<Link href={'/'}>LINK</Link>
					</li>
				</ul>
			</nav>
		</footer>
  )
}

export default Footer
