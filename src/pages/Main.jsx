import React from 'react'
import { Link } from "react-router-dom";

export const Main = () => {
    return (
        <div className="content">
            <div className="container">
                <h1>Главная</h1>
                <div className="content__menu">
                    <Link to="/time">
                        <button className='content__btn button'>Текущее время</button>
                    </Link>
                    <Link to="/weather">
                        <button className='content__btn button'>Погода</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
