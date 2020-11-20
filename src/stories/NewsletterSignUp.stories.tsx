import React from 'react';
import type { NewsletterSignUpProps } from '../components/NewsletterSignUp';
import { NewsletterSignUp } from '../components/NewsletterSignUp';
import { newsletters } from '../newsletters';
import type { Newsletter, User } from '../types';

export default {
	title: 'Components/NewsletterSignUp',
	component: NewsletterSignUp,
};

const { guardianTodayNewsletter } = newsletters;

const loggedInUser: User = {
	loggedIn: true,
	email: 'firstname.lastname@example.com',
};

const loggedOutUser: User = {
	loggedIn: false,
};

export const NewsletterSignUpLoggedOut: React.FC<NewsletterSignUpProps> = () => (
	<NewsletterSignUp
		newsletter={guardianTodayNewsletter}
		user={loggedOutUser}
	/>
);

export const NewsletterSignUpLoggedIn: React.FC<NewsletterSignUpProps> = () => (
	<NewsletterSignUp
		newsletter={guardianTodayNewsletter}
		user={loggedInUser}
	/>
);
