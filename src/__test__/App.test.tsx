import { render, within } from '@testing-library/react';
import React from 'react';
import { App } from '../App';

describe('<App />', () => {
	it('should display at least one section', async () => {
		const { findByTestId } = render(<App />);

		const roundUpPage = await findByTestId('roundup-page');

		const sectionsOnPage = within(roundUpPage).getAllByTestId('section');

		expect(sectionsOnPage.length).toBeGreaterThanOrEqual(1);
	});

	it('should display at least one card', async () => {
		const { findByTestId } = render(<App />);

		const roundUpPage = await findByTestId('roundup-page');

		const cardsOnPage = within(roundUpPage).getAllByTestId('card');

		expect(cardsOnPage.length).toBeGreaterThanOrEqual(1);
	});
});
