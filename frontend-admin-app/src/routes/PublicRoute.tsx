import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

interface PublicRouteProps {
   children: JSX.Element
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {

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
      ? <Navigate to="/" />
      : children
}

export default PublicRoute;