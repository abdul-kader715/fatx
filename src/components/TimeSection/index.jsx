import React, { useState, useEffect } from 'react';
import Line from '../../images/lines.png';

const Countdown = () => {
    const targetDate = new Date('2025-04-13T00:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                });
                return;
            }

            const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
            const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="TimeSection">
            <div className="container">
                <div className="wraper">
                    <div className="item">
                        <img src={Line} alt="" />
                        <div className="text">
                            <h2>{timeLeft.days}</h2>
                            <span>Days</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Line} alt="" />
                        <div className="text">
                            <h2>{timeLeft.hours}</h2>
                            <span>Hours</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Line} alt="" />
                        <div className="text">
                            <h2>{timeLeft.minutes}</h2>
                            <span>Minutes</span>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Line} alt="" />
                        <div className="text">
                            <h2>{timeLeft.seconds}</h2>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
