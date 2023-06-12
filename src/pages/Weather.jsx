import React, { useState } from 'react'

export const Weather = () => {

    const [value, setValue] = useState('');
    const [weather, setWeather] = useState({
        city: '',
        temp: '',
        country: '',
        localtime: '',
    });
    const [searched, isSearched] = useState(false);

    const [choice, setChoice] = useState('weather1');


    const chooseWeather = (e) => {
        setChoice(e.target.value)
    }
    const showWeather = () => {

        if (choice == 'weather1') {
            fetch(`http://api.weatherapi.com/v1/current.json?key=fd0bbbff6d724607a39184301230706&q=${value}&aqi=no`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    if (data.error) {
                        setWeather('error');
                    }
                    else {
                        setWeather({ city: data.location.name, temp: data.current.temp_c, country: data.location.country, localtime: data.location.localtime });
                    }

                    isSearched(true);
                });
        }

        if (choice == 'weather2') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b96b421a920d283d73d38c697fba4b96`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data.message == 'city not found') {
                        setWeather('error');
                    }
                    else {
                        setWeather({ city: data.name, temp: Math.round(data.main.temp - 273), country: data.sys.country });
                    }

                    isSearched(true);
                });
        }
    }



    return (
        <div className="content">
            <div className="container">
                <h1>Погода</h1>

                <div className="weather">


                    <div className="weather__choice">
                        <label htmlFor="weather-select">Выберите сервис, предоставляющий погоду:</label>
                        <select onChange={chooseWeather} name="pets" id="weather-select">
                            <option value="">Выберите сервис:</option>
                            <option value="weather1">Weatherapi</option>
                            <option value="weather2">Openweathermap</option>
                        </select>

                    </div>
                    <h2 className="weather__title">Выберите город</h2>
                    <form onSubmit={showWeather} className="weather__form">
                        <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='Введите город' type="text" className="weather__input" />
                        <button type='submit' className="weather__btn button">Показать погоду</button>
                    </form>

                    {
                        searched && (

                            weather == 'error' ? (
                                <div className="weather__content">
                                    <div className="weather__error">
                                        Введите корректное название города
                                    </div>
                                </div>
                            ) :

                                (
                                    <div className="weather__content">
                                        <div className='weather__city'>
                                            {weather.city}, {weather.country}
                                        </div>

                                        {
                                            weather.localtime !== undefined &&
                                            <div className='weather__temperature'>
                                                Текущее время: {weather.localtime}
                                            </div>
                                        }

                                        <div className='weather__temperature'>
                                            Температура: {weather.temp} &#8451;
                                        </div>
                                    </div>
                                )
                        )
                    }
                </div>
            </div>
        </div>
    )
}
