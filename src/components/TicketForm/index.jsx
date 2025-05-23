import React, { useState, useRef } from 'react';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import icon4 from '../../images/icon4.svg';
import icon5 from '../../images/copy.svg';
import icon6 from '../../images/icon5.svg';
import Shape from '../../images/HeroSection/time-bg.svg';

const TicketForm = () => {
    const [formData, setFormData] = useState({
        spend: '',
        get: '',
        email: '',
    });

    const [walletAddress] = useState('0x123456789ABCDEF');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(walletAddress);

        } catch (err) {

        }
    };

    const styles = {
        input: {
            paddingRight: '2rem',
        },
        copyIcon: {
            cursor: 'pointer',
        },
    };

    return (
        <section className='TicketForm'>
            <div className="container">
                <div className="wraper">
                    <span>Grab your ticket now</span>
                    <div className="icon">
                        <img src={icon6} alt="" />
                    </div>
                    <form onSubmit={handleSubmit} className='Form-wrap row'>
                        <div className='fild col-lg-4 col-md-6 col-12'>
                            <label>You will spend</label>
                            <input
                                className='control'
                                type="number"
                                name="spend"
                                value={formData.spend}
                                onChange={handleChange}
                                placeholder="0"
                            />
                            <img src={icon1} alt="" />
                        </div>
                        <div className='fild col-lg-4 col-md-6 col-12'>
                            <label>You will get</label>
                            <input
                                className='control'
                                type="number"
                                name="get"
                                value={formData.get}
                                onChange={handleChange}
                                placeholder="0"
                            />
                            <img src={icon2} alt="" />
                        </div>
                        <div className='fild col-lg-4 col-12'>
                            <label>Email Address</label>
                            <input
                                className='control'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email address"
                            />
                            <img src={icon3} alt="" />
                        </div>
                        <div className='fild col-12'>
                            <label>Wallet Address</label>
                            <input
                                className='control'
                                type="text"
                                value={walletAddress}
                                readOnly
                                ref={inputRef}
                                style={styles.input}
                            />
                            <img src={icon4} alt="" />
                            <span className='icon5' onClick={copyToClipboard} style={styles.copyIcon}>
                                <img src={icon5} alt="" />
                            </span>
                        </div>
                        <button type="submit">
                            Buy Now
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.2303 11.0785C20.2019 10.9583 20.1442 10.8469 20.0625 10.7544C19.9807 10.6618 19.8773 10.5908 19.7615 10.5478L14.3606 8.5219L15.735 1.64721C15.7661 1.48748 15.7444 1.32197 15.6732 1.17564C15.602 1.0293 15.4851 0.910102 15.3403 0.836016C15.1954 0.76193 15.0303 0.73698 14.87 0.764931C14.7097 0.792882 14.5628 0.872217 14.4515 0.990965L3.95153 12.241C3.86625 12.3308 3.80456 12.4404 3.77197 12.5599C3.73937 12.6795 3.73689 12.8052 3.76475 12.9259C3.79261 13.0466 3.84993 13.1585 3.9316 13.2517C4.01328 13.3448 4.11675 13.4163 4.23278 13.4597L9.63559 15.4857L8.26497 22.3528C8.23385 22.5126 8.25552 22.6781 8.32673 22.8244C8.39793 22.9708 8.51479 23.09 8.65968 23.164C8.80457 23.2381 8.96963 23.2631 9.12995 23.2351C9.29026 23.2072 9.43714 23.1278 9.54841 23.0091L20.0484 11.7591C20.1321 11.6692 20.1925 11.5601 20.2242 11.4415C20.2559 11.3228 20.258 11.1981 20.2303 11.0785ZM10.2534 20.0625L11.235 15.1519C11.2701 14.9777 11.2423 14.7968 11.1564 14.6412C11.0706 14.4857 10.9323 14.3656 10.7662 14.3025L5.81247 12.4416L13.7456 3.94221L12.765 8.85284C12.7298 9.027 12.7577 9.20797 12.8435 9.36352C12.9294 9.51907 13.0676 9.6391 13.2337 9.70222L18.1837 11.5585L10.2534 20.0625Z" fill="#C38F0F" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
            <div className="shape-bg">
                <img src={Shape} alt="" />
            </div>
        </section>
    );
};

export default TicketForm;
