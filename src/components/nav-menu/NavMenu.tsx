import React from 'react';
import { useWindowSize } from '../../common/helpers/windowHelper';
import { MEDIUM_DEVICE } from '../../common/variables/breakpoints';
import { menuItems } from './menuItems';
import './NavMenu.scss';

const NavMenu = () => {
    const size = useWindowSize();

    return (
        <nav className="d-flex justify-content-between align-items-center">
            {size.width > MEDIUM_DEVICE ? (
                <>
                    {menuItems.map(({ name }, index) => (
                        <span key={index} className="menu--item">
                            {name}
                        </span>
                    ))}
                </>
            ) : (
                <>
                    {menuItems.slice(0, 4).map(({ name }, index) => (
                        <span key={index} className="menu--item">
                            {name}
                        </span>
                    ))}
                </>
            )}
        </nav>
    );
};

export default NavMenu;
