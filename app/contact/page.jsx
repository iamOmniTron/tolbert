import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import ContactSection from "./components/contactSection";
import ContactHero from "./components/hero";



export default function ContactPage(){


    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <ContactHero/>
            <ContactSection/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}