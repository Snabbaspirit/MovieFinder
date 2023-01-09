import { render, screen } from '@testing-library/react';
import React from 'react';
import {Header} from '../components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Header tests', () => {
	it('should contains the heading', () => {
		render(
            <Router>
                <Header />
            </Router>
        );
		const heading = screen.getByText(/Movies finder/i);
		expect(heading).toBeInTheDocument();
	});
});
