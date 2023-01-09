import React, { useDebugValue } from 'react';
import './preview-card.scss';
import { getStylesByGenre } from '../../utils/utils';
import { IMAGE_URL } from '../../constants/constants';

import { useNavigate } from 'react-router-dom';

export const PreviewCard = ({ elem, appearence }) => {
    const navigate = useNavigate();

    return (
        <div
            className="preview-card-container"
            onClick={() => {
                navigate(`/movie/${elem.id}`, { state: { elem, appearence } });
            }}
        >
            <div className={getStylesByGenre(appearence).preview}>
                <p
                    className={`${
                        getStylesByGenre(appearence).font
                    } preview__title`}
                >
                    {elem.original_title}
                </p>
            </div>
            <img
                className="preview-image"
                src={`${IMAGE_URL}${elem.backdrop_path}`}
                alt="preview image"
            ></img>
        </div>
    );
};
