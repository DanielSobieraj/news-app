import React from 'react';
import { menuItems } from './menuItems';
import './NavMenu.scss';

const NavMenu = () => {
    return (
        <nav>
            <div className="d-none d-md-flex justify-content-between align-items-center">
                {menuItems.map(({ name }, index) => (
                    <span key={index} className="menu--item">
                        {name}
                    </span>
                ))}
            </div>
            <div className="d-md-none d-flex justify-content-between align-items-center">
                {menuItems.slice(0, 4).map(({ name }, index) => (
                    <span key={index} className="menu--item">
                        {name}
                    </span>
                ))}
            </div>
        </nav>
    );
};

export default NavMenu;
