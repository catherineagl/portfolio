import styled from 'styled-components';
import bg from '../../images/bg.jpg';
import { mainColor, secondColor } from '../Colors';

export const ProjectsContainer = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
		url(${bg});
	background-repeat: no-repeat;
	background-clip: border-box;
	background-size: cover;
	background-attachment: fixed;
	padding: 5rem;
`;

export const Title = styled.h2`
	font-size: 2.5rem;
	color: #fff;
	text-align: center;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ProjectsWrapper = styled.div`
	width: 80%;
	margin: auto;
	margin-top: 5rem;

	@media screen and (max-width: 768px) {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media screen and (max-width: 480px) {
		margin-top: 2rem;
	}
`;

export const ProjectLinks = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 270px;
	width: 100%;
	display: flex;
	opacity: 0;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		height: 220px;
	}
	@media screen and (max-width: 480px) {
		height: 150px;
	}
`;

export const Link = styled.a`
	padding: 0.5rem 1rem;
	background-color: ${mainColor};
	margin: 0 0.5rem;
	border-radius: 0.25rem;
	font-size: 1.2rem;
	color: white;
	transform: translateY(-150%);
	transition: none.3s ease-in-out;
	&:hover {
		background-color: white;
		color: #010606;
	}

	@media screen and (max-width: 768px) {
		transform: translateY(0%);
	}

	@media screen and (max-width: 480px) {
		transform: translateY(0%);
		font-size: 1rem;
	}
`;

export const ProjectCard = styled.div`
	width: 500px;
	height: 300px;
	margin: 2rem 0;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;

	cursor: pointer;
	&:nth-child(even) {
		margin-left: auto;
	}

	&:hover ${ProjectLinks} {
		opacity: 1;
		backdrop-filter: blur(5px);
		background-color: rgba(0, 0, 0, 0.2);
		transition: 0.2s ease;
	}

	@media screen and (max-width: 768px) {
		width: 400px;
		height: 250px;
		justify-content: center;
		margin-top: 4rem;
		&:nth-child(even) {
			margin-left: 0;
		}
	}

	@media screen and (max-width: 480px) {
		width: 300px;
		height: 170px;
	}
`;

export const ImgContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 500px;
	height: 270px;
	@media screen and (max-width: 768px) {
		width: 400px;
		height: 220px;
	}

	@media screen and (max-width: 480px) {
		width: 300px;
		height: 150px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
`;
export const ProjectTitle = styled.h3`
	position: absolute;
	top: 50%;
	left: 0;
	transform: translateX(-50%);
	font-size: 3.5rem;
	color: ${secondColor};
	font-weight: 400;
	z-index: 5;

	@media screen and (max-width: 768px) {
		top: -2.5rem;
		transform: translateX(0%);

		font-size: 2rem;
		font-weight: bold;
	}

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

export const ProjectInfo = styled.div`
	width: 100%;
	display: flex;
	color: white;
	font-size: 1.5rem;
	justify-content: space-evenly;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 768px) {
		font-size: 1.2rem;
	}

	@media screen and (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

export const ProjectInfoTitle = styled.h4`
	font-weight: 400;
	color: white;
`;

export const ProjectInfoTech = styled.div``;
