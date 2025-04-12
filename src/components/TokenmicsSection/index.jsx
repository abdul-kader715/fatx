import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <section className='TokenmicsSection'>
            <div className="container">
                <div className="title">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-12">
                            <h2>TOKENOMICS</h2>
                            <span>A Sustainable Economy, Powered by Innovation.</span>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="btn-a">
                                <Link to='/'>Learn More <svg width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M19.2501 6V15.75C19.2501 15.9489 19.171 16.1397 19.0304 16.2803C18.8897 16.421 18.699 16.5 18.5001 16.5C18.3011 16.5 18.1104 16.421 17.9697 16.2803C17.8291 16.1397 17.7501 15.9489 17.7501 15.75V7.81031L7.03068 18.5306C6.88995 18.6714 6.69907 18.7504 6.50005 18.7504C6.30103 18.7504 6.11016 18.6714 5.96943 18.5306C5.8287 18.3899 5.74963 18.199 5.74963 18C5.74963 17.801 5.8287 17.6101 5.96943 17.4694L16.6897 6.75H8.75005C8.55114 6.75 8.36037 6.67098 8.21972 6.53033C8.07907 6.38968 8.00005 6.19891 8.00005 6C8.00005 5.80109 8.07907 5.61032 8.21972 5.46967C8.36037 5.32902 8.55114 5.25 8.75005 5.25H18.5001C18.699 5.25 18.8897 5.32902 19.0304 5.46967C19.171 5.61032 19.2501 5.80109 19.2501 6Z" fill="white" />
                                </svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12"></div>
                    <div className="col-lg-6 col-12">
                        <div className="Tokenmics-right">
                            <h2>Token Allocation</h2>
                            <p>FATx token created most of the famous Solana blockchain-based cryptocurrency that operates on a unique and transparent tokenomics model designed to foster a secure and decentralized ecosystem.
                                FATx tokenomics can be broken down into several key components.</p>
                            <span>Total Supply: <strong>4000000000</strong></span>
                            <span>Circulating Supply: <strong>4000000000</strong></span>
                            <span>Smart Contract Address:  <strong>fat9EBF1bBdqUmNVdAmCQCHi6YpMFTVH7p88H19RfAs</strong></span>
                            <ul className='content'>
                                <li className='item'>
                                    <i className='color'></i>
                                    <span> 
                                        <span className='prsent'>28%</span> 
                                         Founder  
                                    </span>
                                </li>
                                <li className='item'>
                                    <i className='color'></i>
                                    <span> 
                                        <span className='prsent'>7.5%</span> 
                                         Future Investor  
                                    </span>
                                </li>
                                <li className='item'>
                                    <i className='color'></i>
                                    <span> 
                                        <span className='prsent'>15%</span> 
                                         Liquidity Market Fund  
                                    </span>
                                </li>
                                <li className='item'>
                                    <i className='color'></i>
                                    <span> 
                                        <span className='prsent'>15%</span> 
                                        Public sale
                                    </span>
                                </li>
                                <li className='item'>
                                    <i className='color'></i>
                                    <span> 
                                        <span className='prsent'>8%</span> 
                                         Staking token  
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;