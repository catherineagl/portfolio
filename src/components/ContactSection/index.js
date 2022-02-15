import React from 'react';
import {
	ContactContainer,
	Form,
	GhIcon,
	Input,
	LiIcon,
	SocialIcons,
	SocialLink,
	SubmitBtn,
	Textarea,
	Title,
} from './ContactElements';

const ContactSection = () => {
	return (
		<ContactContainer>
			<Title>Contacto</Title>
			<Form>
				<Input type="text" />
				<Input type="email" />
				<Textarea placeholder="Asunto"></Textarea>
				<SubmitBtn></SubmitBtn>
			</Form>

			<SocialIcons>
				<SocialLink>
					<GhIcon />
				</SocialLink>
				<SocialLink>
					<LiIcon />
				</SocialLink>
			</SocialIcons>
		</ContactContainer>
	);
};

export default ContactSection;
