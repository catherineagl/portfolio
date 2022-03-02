import styled from 'styled-components';
import { mainColor, secondColor } from '../Colors';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
		url('https://i.ibb.co/JnxZYP8/bg.jpg');
	background-repeat: no-repeat;
	background-clip: border-box;
	background-size: cover;
	background-attachment: fixed;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

export const HeroContent = styled.div`
	z-index: 3;
	width: 80%;
	max-width: 1500px;
	margin: auto;
	position: absolute;
	padding: 8px 24px;
	display: grid;
	height: 100%;
	grid-template-columns: 60% 40%;
	align-content: center;
	transition: 0.3s ease-in-out;
	@media screen and (max-width: 1200px) {
		width: 90vw;
	}
	@media screen and (max-width: 1080px) {
		width: 100%;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		align-content: space-evenly;
		margin-top: 8vh;
	}

	@media screen and (max-width: 480px) {
		width: 90%;
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

	@media screen and (max-width: 480px) {
		font-size: 12px;
	}
`;

export const HeroH1 = styled.h1`
	margin-bottom: 24px;
	font-size: 4rem;
	line-height: 1.1;
	font-weight: 600;
	color: #fff;
	font-weight: bold;
	@media screen and (max-width: 1080px) {
		font-size: 3rem;
	}
	@media screen and (max-width: 768px) {
		font-size: 2.5rem;
	}
	@media screen and (max-width: 480px) {
		font-size: 2rem;
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

	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding: 0.5rem;
	}
	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

export const Column2 = styled.div`
	padding: 2rem 0;
	height: min-content;
	margin: auto;
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

	@media screen and (max-width: 480px) {
		width: 100%;
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

	@media screen and (max-width: 480px) {
		width: 90%;
	}
`;

export const SkillsTitle = styled.h2`
	color: white;
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
	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const SkillsWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	margin-top: 1rem;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const SkillItem = styled.li`
	display: flex;
	align-items: center;
	min-width: 50%;
	padding: 0.2rem 0;
	padding-left: 2rem;
	letter-spacing: 1px;
	font-size: 1.5rem;
	font-weight: 400;
	text-align: left;
	color: #fff;
	img {
		width: 1.5rem;
		margin-right: 0.25rem;
	}
	@media screen and (max-width: 1080px) {
		font-size: 1rem;
		img {
			width: 1rem;
		}
	}
`;

export const MobileSkills = styled.div`
	display: none;
	transition: 0.3s ease-in-out;

	img {
		margin-bottom: 0.25rem;
		width: 2.5rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	@media screen and (max-width: 480px) {
		img {
			width: 1.2rem;
		}
	}
`;

export const SkillBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
	padding: 0.5rem;
	span {
		font-size: 0.7rem;
	}
`;
