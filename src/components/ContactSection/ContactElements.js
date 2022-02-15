import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import bg from '../../images/bg.jpg';
import { secondColor } from '../Colors';

export const ContactContainer = styled.section`
	background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
		url(${bg});
	background-size: cover;
	background-attachment: fixed;

	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5rem 0;
`;
export const Title = styled.h2`
	font-size: 2.5rem;
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const Form = styled.form`
	backdrop-filter: blur(5px);
	background: rgb(255, 255, 255);
	background: linear-gradient(
		332deg,
		rgba(255, 255, 255, 0.5) 32%,
		rgba(204, 204, 204, 0.1) 72%
	);
	max-width: 500px;
	height: 400px;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin: 5rem auto;
	padding: 2rem;
	border-radius: 0.25rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

	@media screen and (max-width: 768px) {
		max-width: 400px;
	}

	@media screen and (max-width: 480px) {
		padding: 1rem;
		margin-top: 2rem;
	}
`;

export const Input = styled.input`
	border: none;
	outline: none;
	border: none;
	font-size: 1.2rem;
	width: 100%;
	padding: 0.5rem;
	border-radius: 4px;
	width: 400px;

	@media screen and (max-width: 768px) {
		max-width: 300px;
	}

	@media screen and (max-width: 480px) {
		max-width: 250px;
		font-size: 1rem;
	}
`;
export const Textarea = styled.textarea`
	border: none;
	outline: none;
	padding: 0.5rem;
	background-color: #fff;
	font-size: 1.1rem;
	margin-bottom: 0.5rem;
	width: 100%;
	color: #010606;
	resize: none;

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;
export const SubmitBtn = styled.button`
	background: ${secondColor};
	border: none;
	border-radius: 0.25rem;
	color: #fff;
	width: 100%;
	padding: 0.5rem;
	font-size: 1.2rem;
	cursor: pointer;
	margin: 0.5rem 0;
	transition: 0.3s ease-in-out;
	&:hover {
		background: #fff;
		color: #010606;
	}

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;

export const Label = styled.label`
	font-size: 1.2rem;
	color: #fff;
	padding: 0.5rem 0;

	@media screen and (max-width: 480px) {
		font-size: 1rem;
	}
`;
export const SocialIcons = styled.div`
	width: 200px;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
`;
export const SocialLink = styled.a`
	font-size: 3rem;
	color: #fff;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;
export const GhIcon = styled(FaGithub)``;
export const LiIcon = styled(FaLinkedin)``;
