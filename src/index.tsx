import React from 'react';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './firebase'
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { StatsProvider } from './contexts/StatsContext';
import { GalleryProvider } from './contexts/GalleryContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { RessourcesProvider } from './contexts/RessourcesContext';
import { AstroAppProvider } from './contexts/AstroAppContext';
import { WeatherAppProvider } from './contexts/WeatherAppContext';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.extend(utc);

dayjs.locale('fr');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <AuthProvider>
  <RessourcesProvider>
    <GalleryProvider>
      <CategoriesProvider>
        <StatsProvider>
          <WeatherAppProvider>
            <AstroAppProvider>
              <App />
            </AstroAppProvider>
            <Analytics />
          </WeatherAppProvider>
        </StatsProvider>
      </CategoriesProvider>
    </GalleryProvider>
  </RessourcesProvider>
  // </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
