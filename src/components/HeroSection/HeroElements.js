import styled from 'styled-components';
import { lightBgColor, mainColor, secondColor } from '../Colors';
import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNpm,
	IoLogoSass,
} from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';
export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	background: #0c0c0c;
	height: 100vh;
	width: 100vw;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const ImgBg = styled.img`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	backdrop-filter: blur(1px);
`;

export const HeroContent = styled.div`
	z-index: 3;
	width: 70%;
	max-width: 1500px;
	margin: auto;
	position: absolute;
	padding: 8px 24px;
	display: grid;
	grid-template-columns: 70% 30%;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 1200px) {
		width: 90vw;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Column1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		margin: auto;
	}
`;

export const Topline = styled.div`
	color: ${mainColor};
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const HeroH1 = styled.h1`
	margin-bottom: 24px;
	font-size: 4rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${secondColor};
	font-weight: bold;

	@media screen and (max-width: 1080px) {
		font-size: 3rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.div`
	max-width: 440px;
	padding: 1rem;
	text-align: center;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: #fff;
	backdrop-filter: blur(5px);
	background: rgba(255, 255, 255, 0.1);
	border-radius: 0.25rem;
`;

export const Column2 = styled.div`
	padding: 2rem 0;
	backdrop-filter: blur(5px);
	background-color: rgba(255, 255, 255, 0.1);
	border-radius: 0.25rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		width: 80%;
		margin: auto;
	}
`;

export const SkillsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;

export const SkillsTitle = styled.h2`
	color: white;
	margin: 0.5rem 0;
	font-size: 2.5rem;
	text-shadow: 1px 1px 2px ${secondColor};
	border-bottom: 3px solid ${secondColor};
	text-align: center;
	width: 70%;
	margin: 0.5rem auto;
	padding: 0.5rem;
	@media screen and (max-width: 1080px) {
		font-size: 2rem;
	}
`;

export const SkillsWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const SkillItem = styled.li`
	padding: 0.2rem 0;
	padding-left: 2rem;
	letter-spacing: 1px;
	font-size: 1.5rem;
	font-weight: 400;
	text-align: left;
	color: #fff;

	@media screen and (max-width: 1080px) {
		font-size: 1.2rem;
	}
`;

export const MobileSkills = styled.div`
	display: none;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 768px) {
		font-size: 4rem;
		color: #fff;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	@media screen and (max-width: 480px) {
		font-size: 3rem;
	}
`;
export const HtmlLogo = styled(IoLogoHtml5)`
	padding: 0.5rem;
`;
export const CssLogo = styled(IoLogoCss3)`
	padding: 0.5rem;
`;
export const JsLogo = styled(IoLogoJavascript)`
	padding: 0.5rem;
`;
export const NpmLogo = styled(IoLogoNpm)`
	padding: 0.5rem;
`;

export const SassLogo = styled(IoLogoSass)`
	padding: 0.5rem;
`;
export const ReactLogo = styled(FaReact)`
	padding: 0.5rem;
`;
export const BsLogo = styled(BsFillBootstrapFill)`
	padding: 0.5rem;
`;
