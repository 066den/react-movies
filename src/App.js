import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Content from "./layouts/Content";
import './global.scss';
//import { lazy, Suspense } from 'react';
import MainLayout from './layouts/Main';

const App = () => {
  return (
    <MainLayout>
      <Header />
      <Content/>
      <Footer />
    </MainLayout>
    );
}

export default App;
