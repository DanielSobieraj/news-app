import React, { useMemo } from 'react';
import { useWindowSize } from '../../common/helpers/windowHelper';
import { MEDIUM_DEVICE } from '../../common/variables/breakpoints';
import { menuItems } from './menuItems';
import './NavMenu.scss';

const NavMenu = () => {
    const size = useWindowSize();

    const navItems = useMemo(() => (size.width > MEDIUM_DEVICE ? menuItems : menuItems.slice(0, 4)), [size.width]);

    return (
        <nav className="d-flex justify-content-between align-items-center">
            {navItems.map(({ name }, index) => (
                <span key={index} className="menu--item">
                    {name}
                </span>
            ))}
        </nav>
    );
};

export default NavMenu;
