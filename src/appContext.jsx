import React from 'react';

const defaultAppData = [
    {
        movies: { horror: [], comedy: [], fantasy: [] },
        favorites: []
    },
    {
        onSetMovies: () => void 0,
        onSetFavorites: () => void 0
    }
];

const Context = React.createContext(defaultAppData);

export const AppContext = ({ children }) => {
    const [movies, setMovies] = React.useState(defaultAppData[0].movies);

    const [favorites, setFavorites] = React.useState(
        defaultAppData[0].favorites
    );

    return (
        <Context.Provider
            value={[
                { movies, favorites },
                {
                    onSetMovies: setMovies,
                    onSetFavorites: setFavorites
                }
            ]}
        >
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () => React.useContext(Context);
