import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { AppLayout } from './appLayout/AppLayout';
import { ROUTES } from './routes';
import { PageBalance } from './pages/balance/PageBalance';
import { ThemeProvider } from './theme/ThemeProvider';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<PageBalance />} />
            <Route path={ROUTES.balance} element={<PageBalance />} />
            <Route path={ROUTES.users} element={<div>users</div>} />
            <Route path={ROUTES.currencies} element={<div>currencies</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
