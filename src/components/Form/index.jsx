import React, { useState } from 'react';
import icon1 from '../../images/icon3.svg';
import Shape from '../../images/roup.svg';

const Index = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
        setError('');
        setSubmitted(false);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setSubmitted(true);
        setEmail('');
    };

    return (
        <section className='TicketFormS2'>
            <div className="container">
                <div className="wraper">
                    <span>Stay up-to Date on the latest FATX News</span>
                    <form onSubmit={handleSubmit} className='Form-wrap row'>
                        <div className='fild col-12'>
                            <label>Email Address</label>
                            <input
                                className='control'
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                            <img src={icon1} alt="" />
                            {error && <small style={{ color: 'red' }}>{error}</small>}
                            {submitted && <small style={{ color: 'green' }}>Thanks for subscribing!</small>}
                        </div>
                        <button type="submit">Subscribe!</button>
                    </form>
                    <div className="shape">
                        <img src={Shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
