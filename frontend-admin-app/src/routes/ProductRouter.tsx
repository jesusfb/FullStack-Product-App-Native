import { useContext } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Link,
  NavLink
} from 'react-router-dom';

import { AuthContext } from '../context/auth';

import { HomePage } from '../pages/HomePage';

export const ProductRouter = () => {

  const { authLogout } = useContext(AuthContext)

  return (
    <>
      <div className="background_app"></div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Admin</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
            </ul>
            <button className="btn btn-outline-danger" onClick={authLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </>
  )
}

export default ProductRouter;