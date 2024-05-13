import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import ReservationContent from "./components/content";
import ReservationsHero from "./components/hero";




export default function AppointmentPage(){


    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <ReservationsHero/>
            <ReservationContent/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}