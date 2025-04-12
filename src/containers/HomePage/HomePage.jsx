import { Fragment } from 'react'
import Shades from "../../images/HeroSection/Shades.png"
import Shades2 from "../../images/HeroSection/Shades-2.png"
import HeroSection from "../../components/HeroSection/index.jsx"
import TimeSection from "../../components/TimeSection/index.jsx"
import TicketForm from "../../components/TicketForm/index.jsx"
import FAQSection from "../../components/FAQSection/index.jsx"
import TokenmicsSection from "../../components/TokenmicsSection/index.jsx"
import Form from "../../components/Form/index.jsx"
import PartnerSection from "../../components/PartnerSection/index.jsx"





function HomePage() {

    return (
        <Fragment>
            <div className="BannerSection">
                <HeroSection />
                <TimeSection />
                <TicketForm />
                <div className="shape">
                    <img src={Shades} alt="" />
                </div>
                <div className="shape-2">
                    <img src={Shades2} alt="" />
                </div>
            </div>
            <TokenmicsSection/>
            <FAQSection/>
            <Form />
            <PartnerSection/>
        </Fragment>
    )
}

export default HomePage
