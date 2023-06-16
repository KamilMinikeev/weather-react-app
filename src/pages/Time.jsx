import React from 'react'

export const Time = () => {

    const [currentTime, setCurrentTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const hour = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    const wish = `${(hour < 12 && 'Доброе утро') || (hour < 17 && 'Добрый день') || 'Добрый вечер'}`;


    return (
        <div className="content">
            <div className="container">
                <h1>Текущее время</h1>

                <div className="time">
                    <h2 className='time__title'>{wish}, текущее время:</h2>
                    <div className="time__content">
                        {hour} : {minutes} : {seconds}
                    </div>
                </div>
            </div>
        </div>
    )
}
