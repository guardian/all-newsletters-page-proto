// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Button } from '@guardian/src-button';
import { body, headline } from '@guardian/src-foundations/typography';
import { TextInput } from '@guardian/src-text-input';
import React, { useState } from 'react';
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

const cardStyles = css`
	width: 220px;
	border-width: 2px;
`;

const titleStyle = css`
	${headline.xxsmall()};
`;

const descriptionStyle = css`
	${body.small()};
`;

const NewsletterInfo: React.FC<NewsletterInfoProps> = ({ newsletter }) => {
	const { title, description } = newsletter;
	return (
		<div>
			<div css={titleStyle}>{title}</div>
			<div css={descriptionStyle}>{description}</div>
		</div>
	);
};

const NewsletterSignUp: React.FC<NewsletterSignUpProps> = ({
	newsletter,
	user,
}) => {
	const [userEmail, setUserEmail] = useState(user.loggedIn ? user.email : '');
	const [isValidEmail, setIsValidEmail] = useState(true);
	const emailField = user.loggedIn ? (
		<TextInput
			label="Enter your email address:"
			supporting="Your email has been pre-populated from your account"
			width={30}
			value={userEmail}
			error={isValidEmail ? 'Please enter a valid email address' : ''}
			required
		/>
	) : (
		<TextInput
			type="email"
			label="Enter your email address:"
			value={userEmail}
			onChange={(event) => setUserEmail(event.target.value)}
			width={30}
			required
		/>
	);
	return (
		<form action="https://www.theguardian.com/email" method="post">
			{emailField}
			<input type="hidden" name="listName" value={newsletter.listName} />
			<Button data-link-name={`Subscribe to ${newsletter.listName}`}>
				Sign up
			</Button>
		</form>
	);
};

export const Card: React.FC<CardProps> = ({
	newsletter,
	user = { loggedIn: false },
}) => (
	<div css={cardStyles}>
		<NewsletterInfo newsletter={newsletter} />
		<NewsletterSignUp newsletter={newsletter} user={user} />
	</div>
);
