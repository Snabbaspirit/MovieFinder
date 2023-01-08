import React from 'react';
import { Header } from './src/components/Header/Header';
import { CarouselsContainer } from './src/components/CarouselsContainer/CarouselsContainer';
import { Movie } from './src/components/Movie/Movie';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const componentAlongHeader = (Component) => {
    return (
        <>
            <Header />
            <Component />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: componentAlongHeader(CarouselsContainer)
    },
    {
        path: '/movie/:id',
        element: componentAlongHeader(Movie)
    }
]);

export const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};
