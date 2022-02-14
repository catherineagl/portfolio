import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { mainColor, bgColor, lightBgColor, secondColor } from '../Colors';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? bgColor : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
`;
export const NavLogo = styled(LinkScroll)`
	color: #fff;
	justify-self: flex-start;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	font-weight: thin;
	text-decoration: none;
`;
export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		color: #fff;
	}
`;
export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	//margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavItem = styled.li`
	height: 30px;
`;
export const NavLinks = styled(LinkScroll)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	margin: 0 1rem;
	padding: 0 0.25rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid ${mainColor};
	}
	&:hover {
		border-bottom: 3px solid ${mainColor};
	}
`;
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
export const NavBtnLink = styled(LinkScroll)`
	border-radius: 50px;
	background: ${mainColor};
	white-space: nowrap;
	padding: 10px 22px;
	color: #fff;
	outline: none;
	font-size: 16px;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-weight: bold;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`;
