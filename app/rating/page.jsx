import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import RatingsContent from "./components/content";
import RatingsHero from "./components/hero";




export default function Ratings(){
    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <RatingsHero/>
            <RatingsContent/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}