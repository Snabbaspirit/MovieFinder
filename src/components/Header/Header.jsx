import React from 'react';
import { useAppContext } from '../../context/appContext';
import './header.scss';
import { ReactComponent as Favorites } from '../../svg/heart.svg';
import { useState } from 'react';
import { FavoritesModal } from '../FavoritesModal/FavoritesModal';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [{ favorites }] = useAppContext();

    return (
        <div>
            <div className="header-container">
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <h1 className="header__title">Movies finder</h1>
                </Link>
                <div className="favorites-container">
                    <div
                        className="header__favorites"
                        onClick={() => setIsModalOpen((p) => !p)}
                    >
                        <Favorites />{' '}
                        <p className="favorite-count">{favorites.length}</p>
                    </div>
                </div>
            </div>
            {isModalOpen && <FavoritesModal setIsModalOpen={setIsModalOpen} />}
        </div>
    );
};
