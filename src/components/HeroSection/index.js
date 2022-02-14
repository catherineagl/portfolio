import React from 'react';
import { skills } from '../Data';
import bgImg from '../../images/bg.jpg';
import TypeWriterEffect from 'react-typewriter-effect';

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
	SkillItemIcon,
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
							fontFamily: 'Red Hat Display',
							color: '#fff',
							fontWeight: 500,
							fontSize: '1.5em',
						}}
						startDelay={2000}
						cursorColor="#3F3D56"
						multiText={[
							'Hey there, This is a type writer animation package',
							'it consist of two types...',
							'Single text display and multi text display',
							'Fonts can be customized.',
							'The type speed can be customized as well',
						]}
						multiTextDelay={1000}
						typeSpeed={30}
						loop={true}
					/>
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
