import BlogsSection from "./components/blogs/blogs";
import BottomNav from "./components/bottomNav/bottomNav";
import Clients from "./components/clinets/clients";
import Footer from "./components/footer/footer";
import HelpSection from "./components/help/help";
import { HeroSection } from "./components/hero/hero";
import MissionSection from "./components/mission/mission";
import NavBar from "./components/navbar/navbar";
import ScrollToTop from "./components/scroll-to-top/scrollToTop";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";
import VideoSection from "./components/video/video";
import WelcomeSection from "./components/welcome/welcome";
 


export default function Home(){


  return(
    <div className="relative w-[100vw]" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
          <NavBar/>
          <HeroSection/>
          <WelcomeSection/>
          <MissionSection/>
          <Services/>
          <HelpSection/>
          <BlogsSection/>
          <VideoSection/>
          <Testimonials/>
          <Clients/>
          <BottomNav/>
          <Footer/>
          <ScrollToTop/>
      </div>
  )
}