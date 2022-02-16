import React, { useState, useEffect } from 'react';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<CertificatesSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;
