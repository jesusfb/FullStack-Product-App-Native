import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import AuthRouter from './AuthRouter';
import ProductRouter from './ProductRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={
          <PublicRoute>
            <AuthRouter />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <ProductRouter />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}