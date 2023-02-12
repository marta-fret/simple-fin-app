import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AppLayout } from './appLayout/AppLayout';
import { ROUTES } from './routes';
import { BalancePage } from './pages/balance/BalancePage';
import { ThemeProvider } from './theme/ThemeProvider';
import { APIContextProvider } from './api/APIContext';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <APIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<BalancePage />} />
              <Route path={ROUTES.balance} element={<BalancePage />} />
              <Route path={ROUTES.users} element={<div>users</div>} />
              <Route path={ROUTES.currencies} element={<div>currencies</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </ThemeProvider>
  );
};
