import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import ComplaintsForm from "./components/form";
import ComplaintsHero from "./components/hero";




export default function ComplaintsPage(){



    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <ComplaintsHero/>
            <ComplaintsForm/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}