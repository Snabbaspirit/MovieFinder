import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesModal } from '../components/FavoritesModal/FavoritesModal';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/dom';

describe('FavoritesModal Component', () => {
    const clickHandler = jest.fn();

    it('fires click handler on modal', () => {
        render(
            <Router>
                <FavoritesModal setIsModalOpen={clickHandler} />
            </Router>
        );
        const crossIcon = screen.getByTestId('cross');
        expect(crossIcon).toBeInTheDocument();

        fireEvent.click(crossIcon);
        expect(clickHandler).toHaveBeenCalled();
    });
});
