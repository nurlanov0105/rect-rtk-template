import Header from '@/widgets/header/ui/Header';
// import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
   return (
      <div className='wrapper'>
         <Header />
         {children}
      </div>
   );
};

export default MainLayout;
