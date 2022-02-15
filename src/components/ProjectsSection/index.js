import React from 'react';
import {
	Img,
	ImgContainer,
	ProjectCard,
	ProjectInfo,
	ProjectInfoTech,
	ProjectInfoTitle,
	ProjectsContainer,
	ProjectsWrapper,
	ProjectTitle,
	Title,
} from './ProjectsElements';

const ProjectsSection = () => {
	return (
		<ProjectsContainer id="projects">
			<Title>Proyectos</Title>
			<ProjectsWrapper>
				<ProjectCard>
					<ImgContainer>
						<Img />
					</ImgContainer>
					<ProjectTitle>proyecto</ProjectTitle>
					<ProjectInfo>
						<ProjectInfoTitle>Tecnologias</ProjectInfoTitle>
						<ProjectInfoTech>html, css, javascript</ProjectInfoTech>
					</ProjectInfo>
				</ProjectCard>

				<ProjectCard>
					<ImgContainer>
						<Img />
					</ImgContainer>
					<ProjectTitle>proyecto</ProjectTitle>
					<ProjectInfo>
						<ProjectInfoTitle>Tecnologias</ProjectInfoTitle>
						<ProjectInfoTech>html, css, javascript</ProjectInfoTech>
					</ProjectInfo>
				</ProjectCard>
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default ProjectsSection;
