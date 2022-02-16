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
			<Title data-aos="fade-down-right" data-aos-delay="300">
				Acerca de mi
			</Title>

			<AboutWrapper data-aos="flip-right" data-aos-delay="400">
				<ImgContainer>
					<Img src={img} alt="person" />
				</ImgContainer>
				<TextWrapper>
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
