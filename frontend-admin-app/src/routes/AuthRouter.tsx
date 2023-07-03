import { Navigate, Routes, Route } from 'react-router-dom';

import { SignInPage } from '../pages/SignInPage';

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="/*" element={<Navigate to="sign-in" replace />} />
      </Routes>
    </>
  )
}

export default AuthRouter;