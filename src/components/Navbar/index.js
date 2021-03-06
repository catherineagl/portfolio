import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';

import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) setScrollNav(true);
		else setScrollNav(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="home" onClick={toggleHome}>
						PORTAFOLIO
					</NavLogo>

					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>

					<NavMenu>
						<NavItem>
							<NavLinks
								to="home"
								smooth={true}
								duration={500}
								spy={true}
								exactt="true"
								offset={-80}
							>
								Inicio
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								spy={true}
								exactt="true"
								offset={-80}
							>
								Acerca de mí
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								spy={true}
								exactt="true"
								offset={-80}
							>
								Proyectos
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="certificates"
								smooth={true}
								duration={500}
								spy={true}
								exactt="true"
								offset={-80}
							>
								Certificados
							</NavLinks>
						</NavItem>

						<NavItem>
							<NavLinks
								to="contact"
								smooth={true}
								duration={500}
								spy={true}
								exactt="true"
								offset={-80}
							>
								Contacto
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
