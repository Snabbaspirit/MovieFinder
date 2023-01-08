import React from 'react';
import { Carousel } from '../Carousel/Carousel';
import { useApi } from '../../hooks/useApi';
import { COMEDY, FANTASY, HORROR } from '../../constants/constants';

export const CarouselsContainer = () => {
    const {
        movies: { horror, comedy, fantasy }
    } = useApi();

    return (
        <>
            <Carousel appearence={HORROR} movies={horror} />
            <Carousel appearence={COMEDY} movies={comedy} />
            <Carousel appearence={FANTASY} movies={fantasy} />
        </>
    );
};
