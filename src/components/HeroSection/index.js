import React from 'react';
import { skills } from '../Data';
import TypeWriterEffect from 'react-typewriter-effect';
import {
	HeroContainer,
	HeroContent,
	Column1,
	Topline,
	HeroH1,
	HeroP,
	Column2,
	SkillsContainer,
	SkillsWrapper,
	SkillsTitle,
	SkillItem,
	MobileSkills,
	SkillBox,
} from './HeroElements';

const HeroSection = () => {
	return (
		<HeroContainer id="home" data-aos="fade-right" data-aos-delay="300">
			<HeroContent>
				<Column1>
					<Topline
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-delay="300"
					>
						Hola, Yo soy
					</Topline>
					<HeroH1>Catherine Aguilera</HeroH1>
					<HeroP
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-delay="400"
					>
						Desarrolladora Frontend
					</HeroP>
					<TypeWriterEffect
						textStyle={{
							fontFamily: 'Space Mono',
							color: '#fff',
							fontWeight: 500,
							fontSize: '2rem',
						}}
						startDelay={2000}
						cursorColor="#3F3D56"
						multiText={[
							'Diseño Web',
							'Desarrollo Web',
							'Diseño y Desarrollo Web',
						]}
						multiTextDelay={1000}
						typeSpeed={30}
						loop={true}
					/>
				</Column1>
				<Column2 data-aos="fade-left">
					<SkillsContainer>
						<SkillsTitle>Tecnologías</SkillsTitle>
						<SkillsWrapper>
							{skills.map((skill, index) => (
								<SkillItem
									key={index}
									data-aos="fade-left"
									data-aos-easing="linear"
									data-aos-delay={index * 100}
								>
									<img src={skill.icon} alt="" />
									<span>{skill.name}</span>
								</SkillItem>
							))}
						</SkillsWrapper>

						<MobileSkills>
							{skills.map((skill, index) => (
								<SkillBox key={index}>
									<img src={skill.icon} alt="" />
									<span>{skill.name}</span>
								</SkillBox>
							))}
						</MobileSkills>
					</SkillsContainer>
				</Column2>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
