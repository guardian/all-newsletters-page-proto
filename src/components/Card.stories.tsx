import React from 'react';
import type { Newsletter, User } from '../types';
import type { CardProps } from './Card';
import { Card } from './Card';

export default {
	title: 'Components/Card',
	component: Card,
};

const guardianTodayNewsletter: Newsletter = {
	listName: 'today-uk',
	title: 'Guardian Today UK',
	description:
		'The day’s headlines and highlights emailed direct to you every morning. Get the whole picture from a source you trust',
	frequency: 'Every day',
};

const loggedInUser: User = {
	loggedIn: true,
	email: 'hello@example.com',
};

export const LoggedOut: React.FC<CardProps> = () => (
	<Card newsletter={guardianTodayNewsletter} />
);

export const LoggedIn: React.FC<CardProps> = () => (
	<Card newsletter={guardianTodayNewsletter} user={loggedInUser} />
);
