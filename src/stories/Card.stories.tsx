import React from 'react';
import type { CardProps } from '../components/Card';
import { Card } from '../components/Card';
import { initialState, newsletters } from '../newsletters';

export default {
	title: 'Components/Card',
	component: Card,
};

const guardianTodayNewsletter = newsletters['News roundups'][0];

// TODO : Get this story working by working out how state works for individual components
// export const LoggedOut: React.FC<CardProps> = () => (
// 	<Card
// 		newsletter={guardianTodayNewsletter}
// 		currentSelection={initialState}
// 	/>
// );

// export const LoggedIn: React.FC<CardProps> = () => (
// 	<Card
// 		newsletter={guardianTodayNewsletter}
// 		currentSelection={initialState}
// 	/>
// );
