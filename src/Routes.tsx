import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Views
import SearchView from '@/views/Search';
import Layout from './components/Layout';

// Lazy loading views
const HistoryView = lazy(() => import('@/views/History'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchView />} />
      <Route
        path="/history"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HistoryView />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>,
  ),
);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
