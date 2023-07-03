import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';


interface PrivateRouteProps {
   children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {

   const { logging, authenticated, authLoad } = useContext(AuthContext);

   useEffect(() => {
      authLoad()
   }, [])

   if (logging) {
      return (
         <>
            <h1>Loading...</h1>
         </>
      )
   }

   return !!authenticated
      ? children
      : <Navigate to="/auth/sign-in" />
}

export default PrivateRoute;