import { css } from '@emotion/core';
import { space } from '@guardian/src-foundations';
import { body, headline } from '@guardian/src-foundations/typography';
import React from 'react';
import type { Newsletter } from '../types';

export interface NewsletterInfoProps {
	newsletter: Newsletter;
}

const newsletterInfoStyle = css`
	margin-bottom: ${space[4]}px;
`;
const titleStyle = css`
	${headline.xxsmall()};
	margin-bottom: ${space[2]}px;
`;
const descriptionStyle = css`
	${body.small()};
`;

export const NewsletterInfo: React.FC<NewsletterInfoProps> = ({
	newsletter,
}) => {
	const { title, description } = newsletter;
	return (
		<div css={newsletterInfoStyle}>
			<div css={titleStyle}>{title}</div>
			<div css={descriptionStyle}>{description}</div>
		</div>
	);
};
