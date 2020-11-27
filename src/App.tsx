import { Container } from '@guardian/src-layout';
import React from 'react';
import { Page } from './components/Page';
import { newsletters } from './newsletters';

// const containerStyles = css`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-between;
// `; css={containerStyles}

export const App: React.FC = () => (
	<Container data-testid="roundup-page">
		<Page newsletters={newsletters} />
	</Container>
);
