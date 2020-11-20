import { css } from '@emotion/core';
import { Button } from '@guardian/src-button';
import { space } from '@guardian/src-foundations';
import { TextInput } from '@guardian/src-text-input';
import React, { useState } from 'react';
import type { Newsletter, User } from '../types';

const inputFieldStyles = css`
	margin-right: ${space[2]}px;
`;

export interface NewsletterSignUpProps {
	newsletter: Newsletter;
	user: User;
	enteredEmail?: string;
}

export const NewsletterSignUp: React.FC<NewsletterSignUpProps> = ({
	newsletter,
	user,
	enteredEmail = '',
}) => {
	const [userEmail, setUserEmail] = useState(
		user.loggedIn ? user.email : enteredEmail,
	);
	const [isValidEmail, setIsValidEmail] = useState(true);
	const emailField = user.loggedIn ? (
		<TextInput
			css={inputFieldStyles}
			label="Enter your email address:"
			supporting="Your email has been pre-populated from your account"
			width={30}
			value={userEmail}
			error={isValidEmail ? '' : 'Please enter a valid email address'}
			required
		/>
	) : (
		<TextInput
			css={inputFieldStyles}
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
