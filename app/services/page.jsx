import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import MainContent from "./components/content";
import ServiceHero from "./components/hero";







export default function ServicePage(){


    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <ServiceHero/>
            <MainContent/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}