// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Accordion } from '@guardian/src-accordion';
import React, { useState } from 'react';
import { initialState } from '../newsletters';
import type { Newsletter, Newsletters, User } from '../types';
import { Card } from './Card';
import { Section } from './Section';

export interface PageProps {
	newsletters: Newsletters;
	user?: User;
}

export const Page: React.FC<PageProps> = ({ newsletters }) => {
	const [user, setUser] = useState<User>({ loggedIn: false });
	const [currentSelection, setCurrentSelection] = useState<
		Record<string, boolean>
	>(initialState);
	const sections = Object.keys(newsletters).map((sectionName) => {
		const cards = newsletters[sectionName].map((newsletter: Newsletter) => (
			<Card
				newsletter={newsletter}
				currentSelection={currentSelection}
				onSelection={setCurrentSelection}
				key={newsletter.listName}
			/>
		));
		return (
			<Section
				sectionName={sectionName}
				key={sectionName.replace(' ', '-')}
			>
				{cards}
			</Section>
		);
	});

	return <Accordion hideToggleLabel={true}>{sections}</Accordion>;
};
