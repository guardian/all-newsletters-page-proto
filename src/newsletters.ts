import type { Newsletter } from './types';

const guardianTodayNewsletter: Newsletter = {
	listName: 'today-uk',
	title: 'Guardian Today UK',
	description:
		'The day’s headlines and highlights emailed direct to you every morning. Get the whole picture from a source you trust',
	frequency: 'Every day',
};

export const newsletters = { guardianTodayNewsletter };
