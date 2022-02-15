import React from 'react';
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SidebarBtnWrap,
	SidebarSpecialLink,
} from './SidebarElements';
const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to="home"
						smooth={true}
						duration={500}
						spy={true}
						exactt="true"
						offset={-80}
						onClick={toggle}
					>
						Inicio
					</SidebarLink>
					<SidebarLink
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exactt="true"
						offset={-80}
						onClick={toggle}
					>
						Acerca de mi
					</SidebarLink>
					<SidebarLink
						to="projects"
						smooth={true}
						duration={500}
						spy={true}
						exactt="true"
						offset={-80}
						onClick={toggle}
					>
						Proyectos
					</SidebarLink>
					<SidebarLink
						to="certificates"
						smooth={true}
						duration={500}
						spy={true}
						exactt="true"
						offset={-80}
						onClick={toggle}
					>
						Certificados
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarSpecialLink
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exactt="true"
						offset={-80}
						onClick={toggle}
					>
						Contactame
					</SidebarSpecialLink>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
