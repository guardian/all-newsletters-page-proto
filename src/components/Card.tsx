import { css } from '@emotion/core';
import { Checkbox } from '@guardian/src-checkbox';
import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import type { Newsletter } from '../types';
import { NewsletterInfo } from './NewsletterInfo';

export interface CardProps {
	newsletter: Newsletter;
	onSelection: Dispatch<SetStateAction<Record<string, boolean>>>;
	currentSelection: Record<string, boolean>;
}

const cardStyles = css`
	width: 200px;
	border-width: 2px;
`;

export const Card: React.FC<CardProps> = ({
	newsletter,
	currentSelection,
	onSelection,
}) => {
	const { listName } = newsletter;
	return (
		<div css={cardStyles} data-testid="card">
			<NewsletterInfo newsletter={newsletter} />
			<Checkbox
				value={listName}
				label={`Get me ${newsletter.frequency}`}
				checked={currentSelection[listName]}
				onChange={() => {
					onSelection({
						...currentSelection,
						[listName]: !currentSelection[listName],
					});
				}}
			/>
		</div>
	);
};
