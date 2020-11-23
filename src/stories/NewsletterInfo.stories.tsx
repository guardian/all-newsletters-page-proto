import React from 'react';
import type { NewsletterInfoProps } from '../components/NewsletterInfo';
import { NewsletterInfo } from '../components/NewsletterInfo';
import { newsletters } from '../newsletters';

export default {
	title: 'Components/NewsletterInfo',
	component: NewsletterInfo,
};

const guardianTodayNewsletter = newsletters['News roundups'][0];

export const NewsletterWithoutImage: React.FC<NewsletterInfoProps> = () => (
	<NewsletterInfo newsletter={guardianTodayNewsletter} />
);
