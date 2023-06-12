import React from 'react'

export const Time = () => {

    const [today, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    const hour = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const wish = `${(hour < 12 && 'Доброе утро') || (hour < 17 && 'Добрый день') || 'Добрый вечер'}`;

    return (
        <div className="content">
            <div className="container">
                <h1>Текущее время</h1>

                <div className="time">
                    <h2 className='time__title'>{wish}, текущее время:</h2>
                    <div className="time__content">
                        {`${hour < 10 ? '0' + hour : hour} `} : {`${minutes < 10 ? '0' + minutes : minutes} `} : {`${seconds < 10 ? '0' + seconds : seconds} `}
                    </div>
                </div>
            </div>
        </div>
    )
}
