import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import shape from '../../images/round.svg'
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className='FAQSection'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="title text-center mb-4">
                            <h2>Frequently Asked Questions</h2>
                            <span>
                                Small business owners trust Found Local Marketing to help them attract more customers and grow their businesses.
                                See how our local marketing strategies have helped businesses just like yours.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="accordion row" id="accordionExample">

                    <div className="col-lg-6 col-12">
                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === 0 ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(0)}
                                >
                                    What services do you offer?
                                </button>
                            </h3>
                            <div className={`accordion-collapse collapse ${activeIndex === 0 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>FATx Coin is a versatile digital asset designed for trading, investing, and decentralized financial applications. It enables seamless transactions,
                                         secure asset management, and innovative financial solutions within the blockchain ecosystem</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === 1 ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(1)}
                                >
                                    How long does it take to see results?
                                </button>
                            </h3>
                            <div className={`accordion-collapse collapse ${activeIndex === 1 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>FATx Coin is a versatile digital asset designed for trading, investing, and decentralized financial applications. It enables seamless transactions, secure asset management, and innovative financial solutions within the blockchain ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === 2 ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(2)}
                                >
                                    Can you work with any industry?
                                </button>
                            </h3>
                            <div className={`accordion-collapse collapse ${activeIndex === 2 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>FATx Coin is a versatile digital asset designed for trading, investing, and decentralized financial applications. It enables seamless transactions, secure asset management, and innovative financial solutions within the blockchain ecosystem</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item ">
                            <h3 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === 3 ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(3)}
                                >
                                    Do you offer customized packages?
                                </button>
                            </h3>
                            <div className={`accordion-collapse collapse ${activeIndex === 3 ? "show" : ""}`}>
                                <div className="accordion-body">
                                    <p>FATx Coin is a versatile digital asset designed for trading, investing, and decentralized financial applications. It enables seamless transactions, secure asset management, and innovative financial solutions within the blockchain ecosystem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={shape} alt="" />
            </div>
        </section>
    );
};

export default FAQ;
