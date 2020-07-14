import React from 'react';
import { HomePageContainer } from '../Containers';

export const ROUTES = [
    {
        name: 'Trang chủ',
        path: '/',
        exact: true,
        main: (...props) => <HomePageContainer {...props} />,
    },
];
