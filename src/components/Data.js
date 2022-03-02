//projects images
import p1 from '../images/project-1.png';
import p2 from '../images/project-2.png';
import p3 from '../images/project-3.png';
import p4 from '../images/project-4.png';
import p5 from '../images/project-5.png';
import p6 from '../images/project-6.png';
//certificates images
import c1 from '../images/certificate-1.png';
import c2 from '../images/certificate-2.png';
import c3 from '../images/certificate-3.png';
import c4 from '../images/certificate-4.png';
import c5 from '../images/certificate-5.png';
import c6 from '../images/certificate-6.png';
import c7 from '../images/certificate-7.png';
import c8 from '../images/certificate-8.png';
import c9 from '../images/certificate-9.png';
import c10 from '../images/certificate-10.png';
import c11 from '../images/certificate-11.png';
import c12 from '../images/certificate-12.png';
//skills images
import html from '../images/html-icon.svg';
import css from '../images/css-icon.svg';
import js from '../images/js-icon.svg';
import ts from '../images/ts-icon.svg';
import react from '../images/react-icon.svg';
import redux from '../images/redux-icon.svg';
import sass from '../images/sass-icon.svg';
import bs from '../images/bootstrap-icon.svg';
import styledCom from '../images/styled-components-icon.svg';
import npm from '../images/npm-icon.svg';
import git from '../images/git-icon.svg';
import firebase from '../images/firebase-icon.svg';
import webpack from '../images/webpack-icon.svg';

export const skills = [
	{ name: 'HTML', icon: html },
	{ name: 'CSS', icon: css },
	{ name: 'JavaScript', icon: js },
	{ name: 'TypeScript', icon: ts },
	{ name: 'React.js', icon: react },
	{ name: 'Redux', icon: redux },
	{ name: 'npm', icon: npm },
	{ name: 'Git', icon: git },
	{ name: 'Firebase', icon: firebase },
	{ name: 'Webpack', icon: webpack },
	{ name: 'Sass', icon: sass },
	{ name: 'Bootstrap', icon: bs },
	{ name: 'Styled Components', icon: styledCom },
];

export const projects = [
	{
		title: 'Tesla Clone',
		src: p1,
		position: 'right',
		tech: 'React.js / Redux',
		code: 'https://github.com/catherineagl/tesla-clone',
		preview: 'https://catherineagl.github.io/tesla-clone/',
	},
	{
		title: 'Disney+ Clone',
		src: p2,
		position: 'left',
		tech: 'React.js / Redux / Firebase',
		code: 'https://github.com/catherineagl/disney-plus-clone',
		preview: 'https://disney-plus-2a96b.web.app/',
	},
	{
		title: 'Clima App',
		src: p3,
		position: 'right',
		tech: 'HTML, CSS, JavaScript, Webpack',
		code: 'https://github.com/catherineagl/weather-app/',
		preview: 'https://catherineagl.github.io/weather-app/',
	},
	{
		title: 'Pokedex',
		src: p4,
		position: 'left',
		tech: 'HTML, CSS, JavaScript, Webpack',
		code: 'https://github.com/catherineagl/pokedex',
		preview: 'https://catherineagl.github.io/pokedex/',
	},
	{
		title: 'Memory Card',
		src: p5,
		position: 'right',
		tech: 'React.js',
		code: 'https://github.com/catherineagl/memory-card',
		preview: 'https://catherineagl.github.io/memory-card/',
	},
	{
		title: 'Shopping Cart',
		src: p6,
		position: 'left',
		tech: 'React.js / React Router',
		code: 'https://github.com/catherineagl/shopping-cart',
		preview: 'https://catherineagl.github.io/shopping-cart/',
	},
];

export const certificates = [
	{
		title: 'JavaScript Algorithms and Data Structures - 2021',
		img: c12,
	},
	{ title: 'Responsive Web Design - 2021', img: c11 },
	{
		title: 'Building Interactive JavaScript Websites - 2021',
		img: c10,
	},
	{ title: 'Learn Color Design - 2021', img: c9 },
	{ title: 'Learn Responsive Design - 2021', img: c8 },
	{ title: 'Learn The Command Line - 2021', img: c7 },
	{ title: 'Learn JavaScript - 2021', img: c6 },
	{
		title: 'HTML, CSS, and Javascript for Web Developers - 2020',
		img: c5,
	},
	{
		title: 'Diseño de Páginas Web con Bootstrap 4 - 2020',
		img: c4,
	},
	{ title: 'Introduction to HTML5 - 2020', img: c3 },
	{
		title: 'Introducción al Desarrollo Web II - 2019',
		img: c2,
	},
	{ title: 'Introducción al Desarrollo Web I - 2019', img: c1 },
];
