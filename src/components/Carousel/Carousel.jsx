import React from 'react';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import './carousel.style.scss';
import { DISPLAY_DATA_COUNT } from '../../constants/constants';
import { PreviewCard } from '../PreviewCard/PreviewCard';
import { getStylesByGenre } from '../../utils/utils';

export const Carousel = (props) => {
    const { appearence, movies } = props;

    const [itemsToDisplay, setItemsToDisplay] = React.useState({
        from: 0,
        to: DISPLAY_DATA_COUNT
    });

    const handleShowNext = () => {
        if (itemsToDisplay.to === 20) {
            setItemsToDisplay({ from: 0, to: DISPLAY_DATA_COUNT });
            return;
        }
        setItemsToDisplay((prev) => {
            return {
                ...prev,
                from: prev.from + DISPLAY_DATA_COUNT,
                to: prev.to + DISPLAY_DATA_COUNT
            };
        });
    }

    const handleShowPrevious = () => {
        if (itemsToDisplay.from === 0) {
            setItemsToDisplay({ from: 16, to: 20 });
            return;
        }
        setItemsToDisplay((prev) => {
            return {
                ...prev,
                from: prev.from - DISPLAY_DATA_COUNT,
                to: prev.to - DISPLAY_DATA_COUNT
            };
        });
    }

    return (
        <div className="carousel__container">
            <Arrow
                className={getStylesByGenre(appearence).carousel.left}
                onClick={handleShowPrevious}
            />
            <div className="inner-container">
                {movies &&
                    movies
                        .slice(itemsToDisplay.from, itemsToDisplay.to)
                        .map((el) => {
                            return (
                                <PreviewCard
                                    key={el.id}
                                    elem={el}
                                    appearence={appearence}
                                />
                            );
                        })}
            </div>
            <Arrow
                className={getStylesByGenre(appearence).carousel.right}
                onClick={handleShowNext}
            />
        </div>
    );
};
