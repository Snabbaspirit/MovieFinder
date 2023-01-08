import React from 'react';
import './favorites-modal.scss';
import { IMAGE_URL } from '../../constants/constants';
import { useAppContext } from '../../appContext';
import { ReactComponent as Cross } from '../../svg/cross.svg';

export const FavoritesModal = ({ setIsModalOpen }) => {
    const [{ favorites }] = useAppContext();

    return (
        <div className="modal">
           
            <p className="modal__title">My favorite movies</p>
            <div className="modal__content">
                {favorites.length === 0 ? (
                    <p>There is no favorite movies yet :(</p>
                ) : (
                    favorites.map((item) => {
                        return (
                            <div key={item.id}>
                                <img
                                    className="modal-content__icon"
                                    src={`${IMAGE_URL}${item.poster_path}`}
                                    alt="movie poster"
                                />
                            </div>
                        );
                    })
                )}
                
            </div>

            <Cross
                className="cross__icon"
                onClick={() => setIsModalOpen((p) => !p)}
            />
        </div>
    );
};
