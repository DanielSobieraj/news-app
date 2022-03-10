import React from 'react';
import './assets/styles/styles.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainPage from './components/main-page/MainPage';
import NavMenu from './components/nav-menu/NavMenu';

const App = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <Header />
                <NavMenu />
                <MainPage />
            </div>
            <div className="row">
                <Footer />
            </div>
        </div>
    );
};

export default App;
