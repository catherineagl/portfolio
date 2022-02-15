import React from 'react';
import { skills } from '../Data';
import bgImg from '../../images/bg.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
import TextLoop from 'react-text-loop';
import {
	HeroContainer,
	HeroBg,
	ImgBg,
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
	HtmlLogo,
	CssLogo,
	JsLogo,
	NpmLogo,
	SassLogo,
	ReactLogo,
	BsLogo,
} from './HeroElements';
const HeroSection = () => {
	return (
		<HeroContainer id="home">
			<HeroBg>
				<ImgBg src={bgImg} />
			</HeroBg>
			<HeroContent>
				<Column1>
					<Topline>Hello, I am</Topline>
					<HeroH1>Catherine Aguilera</HeroH1>
					<HeroP>Front-End Developer</HeroP>
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

					{/* <div style={{ color: '#fff', fontSize: '2rem' }}>
						Web
						<TextLoop
							springConfig={{ stiffness: 70, damping: 31 }}
							adjustingSpeed={500}
						>
							<span>Design</span>
							<span>Development</span>
						</TextLoop> 
					</div>*/}
				</Column1>
				<Column2>
					<SkillsContainer>
						<SkillsTitle>Skills</SkillsTitle>
						<SkillsWrapper>
							{skills.map((skill, index) => (
								<SkillItem key={index}>{skill}</SkillItem>
							))}
						</SkillsWrapper>

						<MobileSkills>
							<HtmlLogo />
							<CssLogo />
							<JsLogo />
							<NpmLogo />
							<SassLogo />
							<BsLogo />
							<ReactLogo />
						</MobileSkills>
					</SkillsContainer>
				</Column2>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
