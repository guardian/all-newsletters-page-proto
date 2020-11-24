// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Tiles } from '@guardian/src-layout';
import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Newsletter } from '../types';
import { Card } from './Card';

export interface SectionProps {
	sectionName: string;
	newsletters: Record<string, Newsletter[]>;
	onSelection: Dispatch<SetStateAction<Record<string, boolean>>>;
	currentSelection: Record<string, boolean>;
}

export const Section: React.FC<SectionProps> = ({
	sectionName,
	newsletters,
	currentSelection,
	onSelection,
}) => {
	const cards = newsletters[sectionName].map((newsletter: Newsletter) => (
		<Card
			newsletter={newsletter}
			currentSelection={currentSelection}
			onSelection={onSelection}
			key={newsletter.listName}
		/>
	));

	return (
		<div data-testid="section">
			<Tiles columns={2}>{cards}</Tiles>;
		</div>
	);
};
