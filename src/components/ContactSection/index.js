import React from 'react';
import {
	ContactContainer,
	Form,
	GhIcon,
	Input,
	Label,
	LiIcon,
	SocialIcons,
	SocialLink,
	SubmitBtn,
	Textarea,
	Title,
} from './ContactElements';

const ContactSection = () => {
	return (
		<ContactContainer id="contact">
			<Title>Contacto</Title>
			<Form>
				<Label htmlFor="name">Nombre</Label>
				<Input type="text" id="name" name="name" required />
				<Label htmlFor="name">Email</Label>

				<Input type="email" id="email" name="email" required />

				<Label htmlFor="subject">Email</Label>

				<Textarea placeholder="Asunto" name="subject" id="subject"></Textarea>
				<SubmitBtn type="submit">Enviar</SubmitBtn>
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
