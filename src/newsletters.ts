import type { Newsletter, Newsletters } from './types';

const guardianTodayNewsletter: Newsletter = {
	listName: 'today-uk',
	title: 'The Guardian Today',
	description:
		'The day’s headlines and highlights emailed direct to you every morning. Get the whole picture from a source you trust',
	frequency: 'Every day',
};

const guardianTodayUSNewsletter: Newsletter = {
	listName: 'today-us',
	title: 'The Guardian Today: US edition',
	description:
		'For our readers in the US, we offer a regional edition of our daily email, delivering the most important headlines and highlights every morning',
	frequency: 'Every day',
};

const guardianTodayAUNewsletter: Newsletter = {
	listName: 'today-au',
	title: 'The Guardian Today: Australia edition',
	description:
		'For our readers in Australia, we offer a regional edition of our daily email, delivering the biggest headlines and highlights every lunchtime',
	frequency: 'Every day',
};

const theWeekendPapers: Newsletter = {
	listName: 'the-weekend-papers',
	title: 'The Weekend Papers',
	description:
		'Be the first to find out what’s coming up in the Guardian and the Observer every weekend',
	frequency: 'Weekly',
};

export const newsletters: Newsletters = {
	'News roundups': [
		guardianTodayNewsletter,
		guardianTodayUSNewsletter,
		guardianTodayAUNewsletter,
	],
	'From the papers': [theWeekendPapers],
};

export const initialState = Object.values(newsletters)
	.reduce((acc, cur) => [...acc, ...cur], [])
	.reduce<Record<string, boolean>>((state, newsletter: Newsletter) => {
		state[newsletter.listName] = false;
		return state;
	}, {});
