export interface Newsletter {
	listName: string;
	title: string;
	description: string;
	frequency: string;
	imageUrl?: string;
}

export type SectionName =
	| 'News roundups'
	| 'News by topic'
	| 'Features'
	| 'Sport'
	| 'Culture'
	| 'Lifestyle'
	| 'Comment'
	| 'Work'
	| 'From the papers';

export type Newsletters = Record<string, Newsletter[]>;

export interface User {
	loggedIn: boolean;
	email?: string;
}
