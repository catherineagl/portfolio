import styled from 'styled-components';
import bg from '../../images/bg.jpg';

export const ProjectsContainer = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
		url(${bg});
	background-repeat: no-repeat;
	background-clip: border-box;
	background-size: cover;
	background-attachment: fixed;
	padding: 5rem 0;
`;

export const Title = styled.h2`
	font-size: 2.5rem;
	color: #fff;
	text-align: center;
`;

export const ProjectsWrapper = styled.div``;

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
`;

export const ImgContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 500px;
	height: 300px;
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
	color: white;
	font-weight: 400;
`;

export const ProjectInfo = styled.div`
	width: 100%;
	display: flex;
	color: white;
	justify-content: space-evenly;
	font-size: 1.5rem;
`;

export const ProjectInfoTitle = styled.h4`
	font-weight: 400;
	color: white;
`;

export const ProjectInfoTech = styled.div``;
