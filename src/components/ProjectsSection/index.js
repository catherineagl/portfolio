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
					<ProjectCard
						key={'p' + index}
						data-aos={`fade-${project.position}`}
						data-aos-easing="ease-in-sine"
					>
						<ImgContainer>
							<Img src={project.src} />
						</ImgContainer>
						<ProjectTitle>{project.title}</ProjectTitle>
						<ProjectInfo>
							<ProjectInfoTitle>Tecnologías</ProjectInfoTitle>
							<ProjectInfoTech>{project.tech}</ProjectInfoTech>
						</ProjectInfo>

						<ProjectLinks>
							<Link href={project.code}>Código</Link>
							<Link href={project.preview}>Preview</Link>
						</ProjectLinks>
					</ProjectCard>
				))}
			</ProjectsWrapper>
		</ProjectsContainer>
	);
};

export default ProjectsSection;
