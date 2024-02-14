import HeroSection from "../../components/HeroSection";
import HowItWorks from "../../components/HowItWorks";
import LandingFAQs from "../../components/LandingFAQs";
import LandingFourth from "../../components/LandingFourth";
import LandingNavbar from "../../components/LandingNavbar";
import LandingThird from "../../components/LandingThird";
import LandingVideo from "../../components/LandingVideo";
import PaymentMethods from "../../components/PaymentMethods";
import RecruitinnsWay from "../../components/RecruitinnsWay";

const LandingPage = () => {
    return(
        <>
            <div className="bg-black h-[100%] w-full">
                <LandingNavbar />
                <LandingThird />
                <LandingFourth />
                {/* <HeroSection />
                <LandingVideo />
                <LandingThird />
                    <LandingFourth />
                <HowItWorks />
                <PaymentMethods />
                <LandingFAQs /> */}
            </div>
        </>
    )
}

export default LandingPage;