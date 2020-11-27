import React from 'react';
import type { NewsletterSignUpProps } from '../components/NewsletterSignUp';
import { NewsletterSignUp } from '../components/NewsletterSignUp';
import type { User } from '../types';

export default {
	title: 'Components/NewsletterSignUp',
	component: NewsletterSignUp,
};

const loggedInUser: User = {
	loggedIn: true,
	email: 'firstname.lastname@example.com',
};

const loggedOutUser: User = {
	loggedIn: false,
};

export const NewsletterSignUpLoggedOut: React.FC<NewsletterSignUpProps> = () => (
	<NewsletterSignUp
		newsletters={['today-uk', 'today-us']}
		user={loggedOutUser}
	/>
);

export const NewsletterSignUpLoggedIn: React.FC<NewsletterSignUpProps> = () => (
	<NewsletterSignUp
		newsletters={['today-uk', 'today-us']}
		user={loggedInUser}
	/>
);
