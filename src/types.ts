export interface Newsletter {
	listName: string;
	title: string;
	description: string;
	frequency: string;
	imageUrl?: string;
}

export interface User {
	loggedIn: boolean;
	email?: string;
}
