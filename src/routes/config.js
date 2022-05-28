import { lazy } from 'react';

export default [
	{
		title: 'Home',
		path: '/',
		component: lazy(() => import('../containers/content')),
		exact: true,
	},
	{
		title: 'Experience details',
		path: '/:page/:catId',
		component: lazy(() => import('../containers/content')),
		exact: true,
	},
];
