import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Views
import Redirect404View from '@/views/404';
import IndexView from '@/views/Index';
import SearchView from '@/views/Search';
import Layout from './components/Layout';

// Lazy loading views
const HistoryView = lazy(() => import('@/views/History'));

// createRoutesFromElements

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<IndexView />} />
      <Route path="/search" element={<SearchView />} />
      <Route
        path="/history"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <HistoryView />
          </Suspense>
        }
      />
      <Route path="*" element={<Redirect404View />} />
    </Route>,
  ),
);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
