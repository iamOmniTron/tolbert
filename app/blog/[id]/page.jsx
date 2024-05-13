import BottomNav from "@/app/components/bottomNav/bottomNav";
import Footer from "@/app/components/footer/footer";
import NavBar from "@/app/components/navbar/navbar";
import ScrollToTop from "@/app/components/scroll-to-top/scrollToTop";
import BlogPostHero from "./components/hero";
import BlogContent from "./components/content";



export default function BlogPost(){


    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <BlogPostHero/>
            <BlogContent/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}