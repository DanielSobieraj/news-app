import Header from './components/header/Header';
import NavMenu from './components/nav-menu/NavMenu';
import './assets/styles/styles.scss';
import MainPage from './components/main-page/MainPage';

const App = () => {
    return (
        <div className="container">
            <Header />
            <NavMenu />
            <MainPage />
        </div>
    );
};

export default App;
