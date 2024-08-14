export type LocalizedString = string | Record<string, string>;

export interface Experience {
	company: LocalizedString;
	position: LocalizedString;
	startDate: Date;
	endDate: Date | null; // null if current job
	responsibilities: LocalizedString[];
}

export interface Skill {
	name: LocalizedString;
}

export interface Education {
	institution: LocalizedString;
	degree: LocalizedString;
	field: LocalizedString;
	graduationDate: Date;
}

export interface Resume {
	name: LocalizedString;
	phoneticName?: LocalizedString;
	summary: LocalizedString;
	workExperience: Experience[];
	skills: Skill[];
	education: Education[];
}
