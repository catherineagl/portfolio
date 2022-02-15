import React from 'react';
import {
	AboutContainer,
	AboutWrapper,
	BgContainer,
	Img,
	ImgContainer,
	InfoP,
	TextWrapper,
	Title,
} from './AboutElements';
import img from '../../images/img.jpg';
const AboutSection = () => {
	return (
		<AboutContainer id="about">
			<BgContainer></BgContainer>
			<AboutWrapper>
				<ImgContainer>
					<Img src={img} />
				</ImgContainer>
				<TextWrapper>
					<Title>Acerca de mi</Title>

					<InfoP>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
						autem nesciunt reiciendis voluptatum modi? Quam officia amet rerum
						delectus nihil? Expedita pariatur quidem quos tempora? Quod sit
						eveniet ab perferendis?
					</InfoP>
				</TextWrapper>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;
