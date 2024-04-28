
const Header=()=>{
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <a href="#" className="logo__link">
                            <img src="/images/header/Logo.png" alt="" className="logo__img" />
                        </a>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Desitnations</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Hotels</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Flights</a>
                        </li>
                        <li className="header__menu-item">
                            <a href="#" className="header__menu-link">Bookings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;