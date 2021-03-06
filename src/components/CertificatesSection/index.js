import React from 'react';
import {
	CertificatesCard,
	CertificatesContainer,
	CertificatesWrapper,
	CertificateTitle,
	Img,
	ImgContainer,
	Title,
} from './CertificatesElements';
import { certificates } from '../Data';
const CertificatesSection = () => {
	return (
		<CertificatesContainer id="certificates">
			<Title>Certificados</Title>
			<CertificatesWrapper>
				{certificates.map((item, index) => (
					<CertificatesCard
						key={'c' + index}
						data-aos="flip-right"
						data-aos-easing="ease-in-out"
					>
						<ImgContainer>
							<Img src={item.img} />
						</ImgContainer>
						<CertificateTitle data-aos="fade-down">
							{item.title}
						</CertificateTitle>
					</CertificatesCard>
				))}
			</CertificatesWrapper>
		</CertificatesContainer>
	);
};

export default CertificatesSection;
