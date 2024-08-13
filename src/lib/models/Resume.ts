export interface Experience {
	company: string;
	position: string;
	startDate: Date;
	endDate: Date | null; // null if current job
	responsibilities: string[];
}

export interface Skill {
	name: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	graduationDate: Date;
}

export interface Resume {
	summary: string;
	workExperience: Experience[];
	skills: Skill[];
	education: Education[];
}
