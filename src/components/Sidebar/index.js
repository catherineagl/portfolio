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
					<SidebarLink to="home" onClick={toggle}>
						Inicio
					</SidebarLink>
					<SidebarLink to="about" onClick={toggle}>
						Acerca de mi
					</SidebarLink>
					<SidebarLink to="projects" onClick={toggle}>
						Proyectos
					</SidebarLink>
					<SidebarLink to="certificates" onClick={toggle}>
						Certificados
					</SidebarLink>
				</SidebarMenu>
				<SidebarBtnWrap>
					<SidebarSpecialLink to="contact" onClick={toggle}>
						Contactame
					</SidebarSpecialLink>
				</SidebarBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
