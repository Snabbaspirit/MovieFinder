import { HORROR, COMEDY, FANTASY } from '../constants/constants';

export const getStylesByGenre = (genre) => {
    switch (genre) {
        case HORROR:
            return {
                carousel: {
                    left: 'arrow-left-horror',
                    right: 'arrow-right-horror'
                },
                preview: 'title-container-horror',
                movieInfo: 'horror-info-container',
                font: 'horror-font'
            };
        case COMEDY:
            return {
                carousel: {
                    left: 'arrow-left-comedy',
                    right: 'arrow-right-comedy'
                },
                preview: 'title-container-comedy',
                movieInfo: 'comedy-info-container',
                font: 'comedy-font'
            };
        case FANTASY:
            return {
                carousel: {
                    left: 'arrow-left-fantasy',
                    right: 'arrow-right-fantasy'
                },
                preview: 'title-container-fantasy',
                movieInfo: 'fantasy-info-container',
                font: 'fantasy-font'
            };

        default:
            return {
                carousel: { left: '', right: '' },
                preview: '',
                movieInfo: ''
            };
    }
};
