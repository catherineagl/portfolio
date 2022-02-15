import React from 'react';
import {
	Img,
	ImgContainer,
	Link,
	ProjectCard,
	ProjectInfo,
	ProjectInfoTech,
	ProjectInfoTitle,
	ProjectLinks,
	ProjectsContainer,
	ProjectsWrapper,
	ProjectTitle,
	Title,
} from './ProjectsElements';
import { projects } from '../Data';

const ProjectsSection = () => {
	return (
		<ProjectsContainer id="projects">
			<Title>Proyectos</Title>
			<ProjectsWrapper>
				{projects.map((project, index) => (
					<ProjectCard key={'p' + index}>
						<ImgContainer>
							<Img src={project.src} />
						</ImgContainer>
						<ProjectTitle>{project.title}</ProjectTitle>
						<ProjectInfo>
							<ProjectInfoTitle>Tecnologias</ProjectInfoTitle>
							<ProjectInfoTech>{project.tech}</ProjectInfoTech>
						</ProjectInfo>

						<ProjectLinks>
							<Link>View Code</Link>
							<Link>Preview</Link>
						</ProjectLinks>
					</ProjectCard>
				))}
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default ProjectsSection;
