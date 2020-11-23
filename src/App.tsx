// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Container } from '@guardian/src-layout';
import { Page } from './components/Page';
import { newsletters } from './newsletters';

// const containerStyles = css`
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-between;
// `; css={containerStyles}

export const App = (): JSX.Element => (
	<Container data-testid="roundup-page">
		<Page newsletters={newsletters} />
	</Container>
);
