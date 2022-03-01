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
						Mi nombre es Catherine y soy una desarrolladora Frontend, me encanta
						trabajar con tecnologías JavaScript. Ahora mismo estoy enfocada en
						aprender todo lo relacionado con el Desarrollo Web. También me
						apasiona explorar nuevas tecnologías que puedo aprovechar para
						resolver problemas de la vida real.
					</InfoP>
				</TextWrapper>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;
