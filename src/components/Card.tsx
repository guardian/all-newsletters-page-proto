// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import type { Newsletter, User } from '../types';
import { NewsletterInfo } from './NewsletterInfo';
import { NewsletterSignUp } from './NewsletterSignUp';

export interface CardProps {
	newsletter: Newsletter;
	user?: User;
}

const cardStyles = css`
	width: 300px;
	border-width: 2px;
`;

export const Card: React.FC<CardProps> = ({
	newsletter,
	user = { loggedIn: false },
}) => (
	<div css={cardStyles}>
		<NewsletterInfo newsletter={newsletter} />
		<NewsletterSignUp newsletter={newsletter} user={user} />
	</div>
);
