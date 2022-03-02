import styled from 'styled-components';
import bg from '../../images/bg-2.png';
import { mainColor } from '../Colors';

export const AboutContainer = styled.div`
	max-width: 100vw;
	height: 100vh;
	max-height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 5rem 0;
	position: relative;
	z-index: 1;

	@media screen and (max-width: 480px) {
		height: 80vh;
	}
`;

export const BgContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: url(${bg}) #666;
	z-index: -1;
	overflow: hidden;
`;
export const AboutWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

	width: 80vw;
	margin: auto;
	height: 100vh;
	z-index: 5;
`;
export const ImgContainer = styled.div`
	width: 250px;
	height: 300px;

	@media screen and (max-width: 1080px) {
		display: none;
	}
`;
export const Img = styled.img`
	width: 100%;
	height: 100%;
`;
export const TextWrapper = styled.div`
	max-width: 600px;
	height: 300px;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	backdrop-filter: blur(5px);
	background: rgb(255, 255, 255);
	background: linear-gradient(
		332deg,
		rgba(255, 255, 255, 0.5) 32%,
		rgba(204, 204, 204, 0.1) 72%
	);
	border-right: 3px solid ${mainColor};

	@media screen and (max-width: 480px) {
	}
`;
export const Title = styled.h2`
	font-size: 2.5rem;
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;
export const InfoP = styled.div`
	font-size: 1.2rem;
	padding: 1rem;
	line-height: 1.8rem;
	font-weight: 300;
	letter-spacing: 1px;
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 1rem;
		line-height: 1.2rem;
	}
`;
