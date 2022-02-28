import { MenuItems } from './MenuItems';
import './NavMenu.scss';

const NavMenu = () => {
    return (
        <nav className="d-flex justify-content-between align-items-center">
            {MenuItems.map(({ name }, index) => (
                <span key={index} className="menu--item">
                    {name}
                </span>
            ))}
        </nav>
    );
};

export default NavMenu;
