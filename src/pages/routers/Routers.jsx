import { Routes, Route } from 'react-router';
import Main from '../main/ui/Main';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../not-found/ui/NotFound';

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Main />} />

         {/* <Route path='/*' element={<ProtectedRoute />}>
            <Route path='cart' element={<Cart />} />
         </Route> */}

         {/* <Route path='login' element={<LoginPage />} />
         <Route path='register' element={<RegisterPage />} /> */}
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
};

export default Routers;
