import React from 'react';
import type { Newsletter, User } from '../types';

export interface CardProps {
	newsletter: Newsletter;
	user?: User;
}

interface NewsletterInfoProps {
	newsletter: Newsletter;
}

interface NewsletterSignUpProps {
	newsletter: Newsletter;
	user: User;
}

const NewsletterInfo: React.FC<NewsletterInfoProps> = ({ newsletter }) => {
	const { title, description } = newsletter;
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
};

const NewsletterSignUp: React.FC<NewsletterSignUpProps> = ({
	newsletter,
	user,
}) => {
	const emailField = user.loggedIn ? (
		<input
			type="email"
			name="email"
			placeholder="Email address"
			value={user.email}
			required
		/>
	) : (
		<input type="email" name="email" placeholder="Email address" required />
	);
	return (
		<form action="https://www.theguardian.com/email" method="post">
			{emailField}
			<input type="hidden" name="listName" value={newsletter.listName} />
			<button
				data-link-name={`Subscribe to ${newsletter.listName}`}
				type="button"
				value="37"
			>
				<span>Sign up</span>
			</button>
		</form>
	);
};

export const Card: React.FC<CardProps> = ({
	newsletter,
	user = { loggedIn: false },
}) => (
	<div>
		<NewsletterInfo newsletter={newsletter} />
		<NewsletterSignUp newsletter={newsletter} user={user} />
	</div>
);
