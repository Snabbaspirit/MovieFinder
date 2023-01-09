import React from 'react';
import { useAppContext } from '../context/appContext';
import { API_KEY, BASE_URL, movieIdByName } from '../constants/constants';

const movieUrlByGenre = (genreId) => {
    return `${BASE_URL}/discover/movie?with_genres=${genreId}${API_KEY}`;
};

const getMovies = async (genre) => {
    const url = movieUrlByGenre(genre);

    try {
        const movies = await fetch(url);
        return movies.json();
    } catch (err) {
        console.log('getMovies error', err);
    }
};

// hook responsable of getting movies and set data at context
export const useApi = () => {
    const [{ movies }, { onSetMovies }] = useAppContext();

    React.useEffect(() => {
        // get and set horror movies
        getMovies(movieIdByName.horror).then((data) => {
            onSetMovies((prev) => {
                return {
                    ...prev,
                    horror: data.results
                };
            });
        });

        // // get and set comedy movies
        getMovies(movieIdByName.comedy).then((data) => {
            onSetMovies((prev) => {
                return {
                    ...prev,
                    comedy: data.results
                };
            });
        });

        // // get and set fantasy movies
        getMovies(movieIdByName.fantasy).then((data) => {
            onSetMovies((prev) => {
                return {
                    ...prev,
                    fantasy: data.results
                };
            });
        });
    }, []);

    return { movies };
};
