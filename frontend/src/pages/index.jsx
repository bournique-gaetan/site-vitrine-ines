import Navbar from "../components/Navbar"
import QuoteCarousel from "../components/QuoteCarousel";
import Bandeau from "../components/bandeau";
import QuiSuisJe from "../components/QuiSuisJe";
import Carousel from "../components/Carousel";
import TherapieCard from "../components/Therapiecard";
import RDV from "../components/RDV";
import Avis from "../components/Avis";
import Footer from "../components/Footer";

export const Homepage = () => {


    return (
        <div >
            <Bandeau />
            <Navbar /> 
            <QuoteCarousel />
            <QuiSuisJe />
            <Carousel />
            <TherapieCard />
            <RDV />
            <Avis />
            <Footer />
        </div>
    )
}

