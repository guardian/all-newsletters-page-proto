// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { AccordionRow } from '@guardian/src-accordion';
import { Tiles } from '@guardian/src-layout';
import type React from 'react';

export interface SectionProps {
	sectionName: string;
}

export const Section: React.FC<SectionProps> = ({ sectionName, children }) => (
	<AccordionRow label={sectionName}>
		<Tiles columns={2}>{children}</Tiles>
	</AccordionRow>
);
