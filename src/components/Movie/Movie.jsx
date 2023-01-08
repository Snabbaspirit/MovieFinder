import React from 'react';
import { useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../constants/constants';
import './movie.scss';
import { getStylesByGenre } from '../../utils/utils';
import { useAppContext } from '../../appContext';
import { ReactComponent as Checked } from '../../svg/checked.svg';
import { ReactComponent as TrashIcon } from '../../svg/trash-icon.svg';

import { ReactComponent as Favorites } from '../../svg/favorites.svg';

export const Movie = () => {
    const {
        state: { elem, appearence }
    } = useLocation();

    const [{ favorites }, { onSetFavorites }] = useAppContext();

    const fontClass = React.useMemo(
        () => getStylesByGenre(appearence).font,
        [getStylesByGenre, appearence]
    );

    const isAlreadyExist = React.useMemo(
        () => favorites.some((favorite) => favorite.id === elem.id),
        [favorites]
    );

    return (
        <div className={getStylesByGenre(appearence).movieInfo}>
            <div  className="movieInfo" style={{ display: 'flex' }}>
                <img
                    className="movieInfo__icon"
                    src={`${IMAGE_URL}${elem.poster_path}`}
                    alt="movie poster"
                />
                <div className="movieInfo__wrapper">
                    <h2
                        className={`${
                            getStylesByGenre(appearence).font
                        } movieInfo__title`}
                    >
                        {elem.title}
                    </h2>
                    <p className={`movieInfo__descr ${fontClass}`}>
                        {elem.overview}
                    </p>

                    <div className="movieInfo-button__wrapper">
                        <button
                            onClick={() => {
                                if (isAlreadyExist) {
                                    onSetFavorites((p) =>
                                        p.filter((e) => e.id !== elem.id)
                                    );
                                } else {
                                    onSetFavorites((p) => [...p, elem]);
                                }
                            }}
                            className={`${fontClass} movieInfo__button`}
                        >
                            {!isAlreadyExist
                                ? 'Add to favorites'
                                : 'Remove from favorites'}
                        </button>
                        <div className="movieInfo-button__icon">
                            {!isAlreadyExist ? <Favorites /> : <TrashIcon />}
                        </div>
                    </div>

                    {isAlreadyExist && (
                        <div className={`${fontClass} added-to-favorites`}>
                            Added to favorites!
                            <Checked />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
