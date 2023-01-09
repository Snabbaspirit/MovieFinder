import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppContext } from './src/appContext';
import { App } from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <AppContext>
        <App />
    </AppContext>
);
