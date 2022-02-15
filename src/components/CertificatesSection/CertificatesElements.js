import styled from 'styled-components';
import bg from '../../images/bg-2.png';
import { secondColor } from '../Colors';

export const CertificatesContainer = styled.section`
	background: url(${bg}) #333;
	padding: 5rem 0;
`;

export const Title = styled.h2`
	font-size: 2.5rem;
	color: #fff;
	text-align: center;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const CertificatesWrapper = styled.div`
	width: 80%;
	margin: auto;
	margin-top: 5rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-gap: 1rem;

	@media screen and (max-width: 480px) {
		width: 90%;
		margin-top: 2rem;

		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;

export const CertificatesCard = styled.div`
	width: 100%;
	height: 300px;
	margin: 1rem auto;

	@media screen and (max-width: 480px) {
		height: 220px;
		margin: 1rem auto;
	}
`;

export const ImgContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	height: 100%;
`;

export const CertificateTitle = styled.h3`
	text-align: center;
	font-size: 1rem;
	font-weight: 400;
	color: #fff;
	background-color: ${secondColor};

	@media screen and (max-width: 480px) {
		font-size: 0.8rem;
	}
`;
