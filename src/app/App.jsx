import MainLayout from '@/pages/layouts/MainLayout';
import Routers from '@/pages/routers/Routers';
import React from 'react';

const App = () => {
   return (
      <MainLayout>
         <Routers />
      </MainLayout>
   );
};

export default App;
