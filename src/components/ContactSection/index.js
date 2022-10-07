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
	const handleSubmit = (e) => {};
	return (
		<ContactContainer id="contact">
			<Title data-aos="fade-down-right" data-aos-delay="300">
				Contacto
			</Title>
			<Form
				action="https://formsubmit.co/47c21fc118c685efbdb34220bdf0968b "
				method="POST"
				onSubmit={handleSubmit}
				data-aos="flip-left"
				data-aos-delay="400"
			>
				<Label htmlFor="name">Nombre</Label>
				<Input type="text" id="name" name="name" required />
				<Label htmlFor="name">Email</Label>

				<Input type="email" id="email" name="email" required />

				<Label htmlFor="subject">Mensaje</Label>

				<Textarea placeholder="Asunto" name="subject" id="subject"></Textarea>
				<SubmitBtn type="submit">Enviar</SubmitBtn>
			</Form>

			<SocialIcons>
				<SocialLink
					href="https://github.com/catherineagl"
					data-aos="fade-up"
					data-aos-delay="300"
				>
					<GhIcon />
				</SocialLink>
				<SocialLink
					href="https://www.linkedin.com/in/catherine-aguilera"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					<LiIcon />
				</SocialLink>
			</SocialIcons>
		</ContactContainer>
	);
};

export default ContactSection;
