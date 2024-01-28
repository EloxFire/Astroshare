import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'dayjs/locale/fr';
import dayjs from 'dayjs';
import reportWebVitals from './reportWebVitals';
import { Analytics } from '@vercel/analytics/react';
import { StatsProvider } from './contexts/StatsContext';
import { GalleryProvider } from './contexts/GalleryContext';
import { CategoriesProvider } from './contexts/CategoriesContext';
import { RessourcesProvider } from './contexts/RessourcesContext';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import './firebase'
import { PlannerAppProvider } from './contexts/PlannerAppContext';

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
          <PlannerAppProvider>
            <App />
            <Analytics />
          </PlannerAppProvider>
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
