import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppContext } from './src/appContext';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <AppContext>
        <App />
    </AppContext>
);
