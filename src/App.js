import React, { useState } from 'react';
import AboutSection from './components/AboutSection';
import CertificatesSection from './components/CertificatesSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import Sidebar from './components/Sidebar';
function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<CertificatesSection />
		</>
	);
}

export default App;
