import BottomNav from "@/app/components/bottomNav/bottomNav";
import Footer from "@/app/components/footer/footer";
import NavBar from "@/app/components/navbar/navbar";
import ScrollToTop from "@/app/components/scroll-to-top/scrollToTop";
import MedServiceHero from "./components/hero";
import MainSection from "./components/main";



export default function Service(){

    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <MedServiceHero/>
            <MainSection/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}