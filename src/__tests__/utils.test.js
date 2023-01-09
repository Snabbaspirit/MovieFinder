import { COMEDY, FANTASY, HORROR } from '../constants/constants';
import { getStylesByGenre } from '../utils/utils';

describe('getStylesByGenre', () => {
    it('getStylesByGenre => horror styles', () => {
        expect(getStylesByGenre(HORROR)).toStrictEqual({
            carousel: {
                left: 'arrow-left-horror',
                right: 'arrow-right-horror'
            },
            preview: 'title-container-horror',
            movieInfo: 'horror-info-container',
            font: 'horror-font'
        });
    });

    it('getStylesByGenre => comedy styles', () => {
        expect(getStylesByGenre(COMEDY)).toStrictEqual({
            carousel: {
                left: 'arrow-left-comedy',
                right: 'arrow-right-comedy'
            },
            preview: 'title-container-comedy',
            movieInfo: 'comedy-info-container',
            font: 'comedy-font'
        });
    });

    it('getStylesByGenre => fantasy styles', () => {
        expect(getStylesByGenre(FANTASY)).toStrictEqual({
            carousel: {
                left: 'arrow-left-fantasy',
                right: 'arrow-right-fantasy'
            },
            preview: 'title-container-fantasy',
            movieInfo: 'fantasy-info-container',
            font: 'fantasy-font'
        });
    });

    it('getStylesByGenre => empty styles', () => {
        expect(getStylesByGenre()).toStrictEqual({
            carousel: { left: '', right: '' },
            preview: '',
            movieInfo: ''
        });
    });
});
