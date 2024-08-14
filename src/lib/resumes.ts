import type { Resume } from "$lib/models/Resume";

export const resumes: Resume[] = [{
	"name": "Rajko Vukovic",
	"phoneticName": {
		"en": "ry-ko voo-koh-vich",
		"es": "rai-ko vu-ko-vich",
		"de": "rai-ko vu-ko-witsch"
	},
	"summary": {
		"en": "Senior Frontend Developer with over a decade of experience in React, Redux, and RxJS. Specializes in creating and refining user interfaces for data-centric web applications, translating complex technical specifications into clear, executable strategies. Proficient in Jest and Cypress for stability testing. Committed to enhancing user experience and system frameworks while fostering positive team dynamics.",
		"es": "Desarrollador Frontend Senior con más de una década de experiencia en React, Redux y RxJS. Especializado en crear y refinar interfaces de usuario para aplicaciones web centradas en datos, traduciendo especificaciones técnicas complejas en estrategias claras y ejecutables. Competente en Jest y Cypress para pruebas de estabilidad. Comprometido a mejorar la experiencia del usuario y los marcos del sistema mientras fomenta una dinámica de equipo positiva.",
		"de": "Senior Frontend-Entwickler mit über einem Jahrzehnt Erfahrung in React, Redux und RxJS. Spezialisiert auf die Erstellung und Verfeinerung von Benutzeroberflächen für datenzentrierte Webanwendungen und die Übersetzung komplexer technischer Spezifikationen in klare, umsetzbare Strategien. Erfahren in Jest und Cypress für Stabilitätstests. Engagiert sich für die Verbesserung der Benutzererfahrung und Systemframeworks sowie für die Förderung positiver Teamdynamiken."
	},
	"workExperience": [
		{
			"company": { "en": "WE-R Holding AG", "es": "WE-R Holding AG", "de": "WE-R Holding AG" },
			"position": {
				"en": "Lead of Product Experience and Front End",
				"es": "Líder de Experiencia de Producto y Frontend",
				"de": "Leiter Produkt-Erfahrung und Front-End"
			},
			"startDate": new Date("2022-10-01"),
			"endDate": null,
			"responsibilities": [
				{
					"en": "Spearheaded technical development and integration of Supabase as BaaS",
					"es": "Lideró el desarrollo técnico e integración de Supabase como BaaS",
					"de": "Leitete die technische Entwicklung und Integration von Supabase als BaaS"
				},
				{
					"en": "Developed 'Instant', a Supabase real-time alternative using Dart streams",
					"es": "Desarrolló 'Instant', una alternativa en tiempo real a Supabase utilizando streams de Dart",
					"de": "Entwickelte 'Instant', eine Echtzeit-Alternative zu Supabase mit Dart-Streams"
				},
				{
					"en": "Introduced and implemented blur-hash library for instant image/video preview",
					"es": "Introdujo e implementó la biblioteca blur-hash para la vista previa instantánea de imágenes/videos",
					"de": "Einführung und Implementierung der Blur-Hash-Bibliothek für sofortige Bild-/Videovorschau"
				},
				{
					"en": "Led technical implementation of Supabase, reducing backend costs by 60%",
					"es": "Lideró la implementación técnica de Supabase, reduciendo los costos de backend en un 60%",
					"de": "Leitete die technische Implementierung von Supabase und reduzierte die Backend-Kosten um 60%"
				}
			]
		},
		{
			"company": { "en": "Braintribe Technology GmbH", "es": "Braintribe Technology GmbH", "de": "Braintribe Technology GmbH" },
			"position": {
				"en": "Lead of R&D",
				"es": "Líder de I+D",
				"de": "Leiter F&E"
			},
			"startDate": new Date("2019-07-01"),
			"endDate": new Date("2022-10-01"),
			"responsibilities": [
				{
					"en": "Developed 'Stater,' a library for advanced state management in frontend applications",
					"es": "Desarrolló 'Stater', una biblioteca para la gestión avanzada de estados en aplicaciones frontend",
					"de": "Entwickelte 'Stater', eine Bibliothek für fortgeschrittenes Zustandsmanagement in Frontend-Anwendungen"
				},
				{
					"en": "Implemented performance optimization techniques in React applications",
					"es": "Implementó técnicas de optimización de rendimiento en aplicaciones React",
					"de": "Implementierte Leistungsoptimierungstechniken in React-Anwendungen"
				},
				{
					"en": "Improved frontend codebase and test coverage on multiple projects",
					"es": "Mejoró la base de código frontend y la cobertura de pruebas en múltiples proyectos",
					"de": "Verbesserte den Frontend-Code und die Testabdeckung in mehreren Projekten"
				}
			]
		},
		{
			"company": { "en": "Braintribe Technology GmbH", "es": "Braintribe Technology GmbH", "de": "Braintribe Technology GmbH" },
			"position": {
				"en": "Lead Frontend Developer",
				"es": "Desarrollador Frontend Líder",
				"de": "Leitender Frontend-Entwickler"
			},
			"startDate": new Date("2018-07-01"),
			"endDate": new Date("2019-07-01"),
			"responsibilities": [
				{
					"en": "Led modernization of frontend development by integrating ReactJS and RxJS",
					"es": "Lideró la modernización del desarrollo frontend mediante la integración de ReactJS y RxJS",
					"de": "Führte die Modernisierung der Frontend-Entwicklung durch die Integration von ReactJS und RxJS an"
				},
				{
					"en": "Conducted development workshops on React and RxJS",
					"es": "Dirigió talleres de desarrollo sobre React y RxJS",
					"de": "Leitete Entwicklungsworkshops zu React und RxJS"
				},
				{
					"en": "Improved team productivity by 35% and made key architectural decisions",
					"es": "Mejoró la productividad del equipo en un 35% y tomó decisiones arquitectónicas clave",
					"de": "Steigerte die Produktivität des Teams um 35 % und traf wichtige architektonische Entscheidungen"
				}
			]
		},
		{
			"company": { "en": "Coinify", "es": "Coinify", "de": "Coinify" },
			"position": {
				"en": "Frontend Developer",
				"es": "Desarrollador Frontend",
				"de": "Frontend-Entwickler"
			},
			"startDate": new Date("2018-01-01"),
			"endDate": new Date("2018-06-01"),
			"responsibilities": [
				{
					"en": "Developed UI for cryptocurrency asset management platform",
					"es": "Desarrolló la UI para la plataforma de gestión de activos de criptomonedas",
					"de": "Entwickelte die UI für die Kryptowährungs-Asset-Management-Plattform"
				},
				{
					"en": "Enhanced UI/UX leading to a 45% increase in user satisfaction",
					"es": "Mejoró la UI/UX lo que llevó a un aumento del 45% en la satisfacción del usuario",
					"de": "Verbesserte die UI/UX, was zu einer 45%igen Steigerung der Benutzerzufriedenheit führte"
				}
			]
		},
		{
			"company": { "en": "Self-employed", "es": "Autónomo", "de": "Selbständig" },
			"position": {
				"en": "Freelance Full Stack Developer",
				"es": "Desarrollador Full Stack Freelance",
				"de": "Freiberuflicher Full-Stack-Entwickler"
			},
			"startDate": new Date("2013-11-01"),
			"endDate": new Date("2018-01-01"),
			"responsibilities": [
				{
					"en": "Created scalable web solutions using AngularJS and ReactJS",
					"es": "Creó soluciones web escalables utilizando AngularJS y ReactJS",
					"de": "Erstellte skalierbare Weblösungen mit AngularJS und ReactJS"
				},
				{
					"en": "Employed NodeJS for efficient back-end systems",
					"es": "Utilizó NodeJS para sistemas back-end eficientes",
					"de": "Setzte NodeJS für effiziente Backend-Systeme ein"
				},
				{
					"en": "Managed end-to-end project lifecycles",
					"es": "Gestionó ciclos de vida de proyectos de principio a fin",
					"de": "Verwaltete End-to-End-Projektlebenszyklen"
				},
				{
					"en": "Developed and managed comprehensive web solutions",
					"es": "Desarrolló y gestionó soluciones web integrales",
					"de": "Entwickelte und verwaltete umfassende Weblösungen"
				},
				{
					"en": "Utilized automated testing tools",
					"es": "Utilizó herramientas de prueba automatizadas",
					"de": "Verwendete automatisierte Testwerkzeuge"
				}
			]
		}
	],
	"skills": [
		{
			"name": { "en": "React", "es": "React", "de": "React" },
		},
		{
			"name": { "en": "Redux", "es": "Redux", "de": "Redux" },
		},
		{
			"name": { "en": "RxJS", "es": "RxJS", "de": "RxJS" },
		},
		{
			"name": { "en": "TypeScript", "es": "TypeScript", "de": "TypeScript" },
		},
		{
			"name": { "en": "CSS/SASS", "es": "CSS/SASS", "de": "CSS/SASS" },
		},
		{
			"name": { "en": "D3", "es": "D3", "de": "D3" },
		},
		{
			"name": { "en": "Cypress", "es": "Cypress", "de": "Cypress" },
		},
		{
			"name": { "en": "GraphQL", "es": "GraphQL", "de": "GraphQL" },
		},
		{
			"name": { "en": "Git/GitHub", "es": "Git/GitHub", "de": "Git/GitHub" },
		}
	],
	"education": [
		{
			"institution": {
				"en": "University of Belgrade, School of Electrical Engineering",
				"es": "Universidad de Belgrado, Escuela de Ingeniería Eléctrica",
				"de": "Universität Belgrad, Fakultät für Elektrotechnik"
			},
			"degree": {
				"en": "BS in Software Engineering (incomplete)",
				"es": "Licenciatura en Ingeniería de Software (incompleta)",
				"de": "Bachelor in Software Engineering (unvollständig)"
			},
			"field": {
				"en": "Software Engineering",
				"es": "Ingeniería de Software",
				"de": "Softwaretechnik"
			},
			"graduationDate": new Date("2010-06-01")
		},
		{
			"institution": {
				"en": "Technical Computer School",
				"es": "Escuela Técnica de Computación",
				"de": "Technische Computerschule"
			},
			"degree": {
				"en": "Diploma in Computer Science",
				"es": "Diploma en Ciencias de la Computación",
				"de": "Diplom in Informatik"
			},
			"field": {
				"en": "Computer Science",
				"es": "Ciencias de la Computación",
				"de": "Informatik"
			},
			"graduationDate": new Date("2005-06-01")
		}
	]
}
]
