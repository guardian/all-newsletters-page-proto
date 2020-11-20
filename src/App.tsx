// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Container } from '@guardian/src-layout';
import { Card } from './components/Card';
import { newsletters } from './newsletters';

const { guardianTodayNewsletter } = newsletters;

const containerStyles = css`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const App = (): JSX.Element => (
	<Container css={containerStyles}>
		<Card newsletter={guardianTodayNewsletter} />
		<Card newsletter={guardianTodayNewsletter} />
		<Card newsletter={guardianTodayNewsletter} />
		<Card newsletter={guardianTodayNewsletter} />
	</Container>
);
