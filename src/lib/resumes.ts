import type { Resume } from "$lib/models/Resume";

export const resumes: Resume[] = [{
	"summary": "Senior Frontend Developer with over a decade of experience in React, Redux, and RxJS. Specializes in creating and refining user interfaces for data-centric web applications, translating complex technical specifications into clear, executable strategies. Proficient in Jest and Cypress for stability testing. Committed to enhancing user experience and system frameworks while fostering positive team dynamics.",
	"workExperience": [
		{
			"company": "WE-R Holding AG",
			"position": "Lead of Product Experience and Front End",
			"startDate": new Date("2022-10-01"),
			"endDate": null,
			"responsibilities": [
				"Spearheaded technical development and integration of Supabase as BaaS",
				"Developed 'Instant', a Supabase real-time alternative using Dart streams",
				"Introduced and implemented blur-hash library for instant image/video preview",
				"Led technical implementation of Supabase, reducing backend costs by 60%"
			]
		},
		{
			"company": "Braintribe Technology GmbH",
			"position": "Lead of R&D",
			"startDate": new Date("2019-07-01"),
			"endDate": new Date("2022-10-01"),
			"responsibilities": [
				"Developed 'Stater,' a library for advanced state management in frontend applications",
				"Implemented performance optimization techniques in React applications",
				"Improved frontend codebase and test coverage on multiple projects"
			]
		},
		{
			"company": "Braintribe Technology GmbH",
			"position": "Lead Frontend Developer",
			"startDate": new Date("2018-07-01"),
			"endDate": new Date("2019-07-01"),
			"responsibilities": [
				"Led modernization of frontend development by integrating ReactJS and RxJS",
				"Conducted development workshops on React and RxJS",
				"Improved team productivity by 35% and made key architectural decisions"
			]
		},
		{
			"company": "Coinify",
			"position": "Frontend Developer",
			"startDate": new Date("2018-01-01"),
			"endDate": new Date("2018-06-01"),
			"responsibilities": [
				"Developed UI for cryptocurrency asset management platform",
				"Enhanced UI/UX leading to a 45% increase in user satisfaction"
			]
		},
		{
			"company": "Self-employed",
			"position": "Freelance Full Stack Developer",
			"startDate": new Date("2013-11-01"),
			"endDate": new Date("2018-01-01"),
			"responsibilities": [
				"Created scalable web solutions using AngularJS and ReactJS",
				"Employed NodeJS for efficient back-end systems",
				"Managed end-to-end project lifecycles",
				"Developed and managed comprehensive web solutions",
				"Utilized automated testing tools"
			]
		}
	],
	"skills": [
		{
			"name": "React",
			"level": "Advanced"
		},
		{
			"name": "Redux",
			"level": "Advanced"
		},
		{
			"name": "RxJS",
			"level": "Advanced"
		},
		{
			"name": "TypeScript",
			"level": "Advanced"
		},
		{
			"name": "CSS/SASS",
			"level": "Advanced"
		},
		{
			"name": "D3",
			"level": "Advanced"
		},
		{
			"name": "Cypress",
			"level": "Advanced"
		},
		{
			"name": "GraphQL",
			"level": "Advanced"
		},
		{
			"name": "Git/GitHub",
			"level": "Advanced"
		}
	],
	"education": [
		{
			"institution": "University of Belgrade, School of Electrical Engineering",
			"degree": "BS in Software Engineering (incomplete)",
			"field": "Software Engineering",
			"graduationDate": new Date("2010-06-01"),
		},
		{
			"institution": "Technical Computer School",
			"degree": "Diploma in Computer Science",
			"field": "Computer Science",
			"graduationDate": new Date("2005-06-01"),
		}
	]
}]
