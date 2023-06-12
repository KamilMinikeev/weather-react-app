import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__content">
                    <div className='logo'>
                        <Link to="/">  <img src="/images/logo.svg" alt="logo" /></Link>
                    </div>
                    <ul className="header__links">
                        <Link to="/time">
                            <li>
                                Время
                            </li>
                        </Link>
                        <Link to="/weather">
                            <li>
                                Погода
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>

        </div>
    )
}
