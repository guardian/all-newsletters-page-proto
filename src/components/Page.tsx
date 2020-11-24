// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Accordion, AccordionRow } from '@guardian/src-accordion';
import React, { useState } from 'react';
import { initialState } from '../newsletters';
import type { Newsletters, User } from '../types';
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
	const sections = Object.keys(newsletters).map((sectionName) => (
		<AccordionRow label={sectionName}>
			<Section
				sectionName={sectionName}
				newsletters={newsletters}
				currentSelection={currentSelection}
				onSelection={setCurrentSelection}
				key={sectionName.replace(' ', '-')}
			/>
		</AccordionRow>
	));

	return <Accordion hideToggleLabel={true}>{sections}</Accordion>;
};
