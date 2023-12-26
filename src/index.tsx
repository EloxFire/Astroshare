import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { StatsProvider } from './contexts/StatsContext';
import { GalleryProvider } from './contexts/GalleryContext';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './firebase'
import { CategoriesProvider } from './contexts/CategoriesContext';
import { RessourcesProvider } from './contexts/RessourcesContext';

dayjs.locale('fr');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RessourcesProvider>
    <GalleryProvider>
      <CategoriesProvider>
        <StatsProvider>
          <App />
          <Analytics />
        </StatsProvider>
      </CategoriesProvider>
    </GalleryProvider>
  </RessourcesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
