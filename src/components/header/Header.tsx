import React, { useState } from 'react';
import { ReactComponent as Search } from '../../assets/images/svg/search.svg';
import SearchModal from '../search-modal/SearchModal';
import './Header.scss';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header className="d-flex justify-content-between align-items-center py-3">
            <span className="header--subscribe">Subscribe</span>
            <h2 className="header--title">NewsWeb</h2>
            <div className="d-flex align-items-center">
                <Search role="button" onClick={() => setModalShow(true)} className="mx-3" />
                <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
                <span role="button" className="header--signup d-none d-md-block">
                    Sign up
                </span>
            </div>
        </header>
    );
};

export default Header;
