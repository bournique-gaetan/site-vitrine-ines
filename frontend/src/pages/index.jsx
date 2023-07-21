import Navbar from "../components/Navbar"
import QuoteCarousel from "../components/QuoteCarousel";
import Bandeau from "../components/bandeau";
import QuiSuisJe from "../components/QuiSuisJe";
import Carousel from "../components/Carousel";
import TherapieCard from "../components/Therapiecard";

export const Homepage = () => {


    return (
        <div >
            <p>kierovj</p>
            <Bandeau />
            <Navbar /> 
            <QuoteCarousel />
            <QuiSuisJe />
            <Carousel />
            <TherapieCard />
        </div>
    )
}

