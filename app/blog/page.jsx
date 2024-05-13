import BottomNav from "../components/bottomNav/bottomNav";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import ScrollToTop from "../components/scroll-to-top/scrollToTop";
import Blogs from "./components/blogs";
import BlogHero from "./components/hero";




export default function BlogsPage(){

    return(
        <div className="relative w-full" style={{backgroundColor:"rgba(0,0,0,0.05)"}}>
            <NavBar/>
            <BlogHero/>
            <Blogs/>
            <BottomNav/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}