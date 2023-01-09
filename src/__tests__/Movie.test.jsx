import React from 'react';
import { render, screen } from '@testing-library/react';
import { Movie } from '../components/Movie/Movie';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { renderHook } from '@testing-library/react-hooks';

function mockFunction() {
    const original = jest.requireActual('react-router-dom');
    return {
        ...original,
        useLocation: jest.fn().mockReturnValue({
            // some random element instead of actual movie entity
            state: { elem: { key: 'value' }, appearence: 'horror' }
        })
    };
}

jest.mock('react-router-dom', () => mockFunction());

describe('Movie card Component', () => {
    it('renders Movie card', () => {
        render(
            <Router>
                <Movie />
            </Router>
        );
        const element = screen.queryByTestId('movie-card-wrapper');
        expect(element).toBeInTheDocument();
    });

    it('returns default movies context value', () => {
        const { result } = renderHook(() => useAppContext());

        render(
            <Router>
                <Movie />
            </Router>
        );

        expect(result.current[0]).toStrictEqual({
            movies: { horror: [], comedy: [], fantasy: [] },
            favorites: []
        });
    });
});
