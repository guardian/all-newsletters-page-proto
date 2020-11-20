import React from 'react';
import type { CardProps } from '../components/Card';
import { Card } from '../components/Card';
import { newsletters } from '../newsletters';
import type { User } from '../types';

export default {
	title: 'Components/Card',
	component: Card,
};

const { guardianTodayNewsletter } = newsletters;

const loggedInUser: User = {
	loggedIn: true,
	email: 'firstname.lastname@example.com',
};

export const LoggedOut: React.FC<CardProps> = () => (
	<Card newsletter={guardianTodayNewsletter} />
);

export const LoggedIn: React.FC<CardProps> = () => (
	<Card newsletter={guardianTodayNewsletter} user={loggedInUser} />
);
