import React, { useState } from 'react'


const WEATHER_API_KEY = 'fd0bbbff6d724607a39184301230706';
const OPENWEATHERMAP_API_KEY = 'b96b421a920d283d73d38c697fba4b96';

export const Weather = () => {

    const [value, setValue] = useState('');
    const [weather, setWeather] = useState(null);
    const [state, setState] = useState(false);
    //const [choice, setChoice] = useState('weather1');

    const [choice, setChoice] = useState('');

    const chooseWeather = (e) => {
        setChoice(e.target.value)
    }


    const fetchWeatherData = (url, transformData) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const transformedData = transformData(data);
                setWeather(transformedData);
                setState(true);
            })
            .catch(() => {
                setState(false);
                alert('На данный момент выбранный сервис недоступен. Пожалуйста, выберете другой или попробуйте позже')
            });
    };

    const showWeather = () => {

        if (choice === 'weather1') {

            if (checkEmptyValue()) {
                const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${value}&aqi=no`;

                const transformData = (data) => {
                    if (data.error) {
                        return 'error';
                    } else {
                        return {
                            city: data.location.name,
                            temp: data.current.temp_c,
                            country: data.location.country,
                            localtime: data.location.localtime,
                        };
                    }
                };
                fetchWeatherData(url, transformData);

            }
        }

        else if (choice === 'weather2') {
            if (checkEmptyValue()) {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${OPENWEATHERMAP_API_KEY}`;
                const transformData = (data) => {
                    if (data.message === 'city not found') {
                        return 'error';
                    } else {
                        return {
                            city: data.name,
                            temp: Math.round(data.main.temp - 273),
                            country: data.sys.country,
                        };
                    }
                };
                fetchWeatherData(url, transformData);
            }


        }

        else {
            setWeather('no-choice');
            setState(true);
        }

    };

    const checkEmptyValue = () => {
        if (value !== '') {
            return true;
        }
        else {
            setWeather('error');
            setState(true);
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
                        state && (

                            weather === 'no-choice' ? (
                                <div className="weather__content">
                                    <div className="weather__error">
                                        Пожалуйста выберете сервис
                                    </div>
                                </div>
                            ) :

                                weather === 'error' ? (
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
