import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import "swiper/css";
import { loginAdmin } from "../lib/actions";
import { TOKEN_NAME } from "../lib/helpers";
import { useRouter } from "next/navigation";

export const metadata = {
    title: "Login | Tolbert Specialist Hospital",
    description: "Login to system admin",
  };


export default function Login(){

    const router = useRouter()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const {password,... user} = await loginAdmin(formData);
            const stringValue = JSON.stringify(user);
            localStorage.setItem(TOKEN_NAME,stringValue);
            return router.push("/admin/dashboard");
        } catch (error) {
            throw new Error(error);
        }
    }


    return(
        <div className="h-screen w-screen">
            <div className="h-full w-full flex">
                <div className="h-full w-full flex  flex-col justify-center items-center">
                    <div className="flex-1 w-full flex items-center justify-center">
                        <Image src={"/logo.png"} height={300} width={300} alt="site logo" className="contain animate-pulse"/>
                    </div>
                    <div className="h-[10vh] flex gap-2 text-italic">
                        <Link href={"/login"} className="text-blue-500 hover:text-blue-400 transition-colors duration-75">System Administrator Login</Link>
                        |
                        <Link href={"/"} className="text-blue-500 hover:text-blue-400 transition-colors duration-75">Visit Site</Link>
                    </div>
                </div> 
                <div className="h-full w-full relative flex items-center justify-center" style={{backgroundColor:"rgba(0,0,0,0.5)"}}>
                    <div className="h-full w-full absolute bottom-0 left-0">
                        <Image src={"/DSC_0002.JPG"} fill className="cover" style={{opacity:"0.2"}}/>
                    </div>
                    <div className="h-[50vh] w-[30vw] bg-white rounded-md z-20 drop-shadow-2xl">
                        <div className="px-[50px]">
                            <h1 className="text-center font-bold my-2 text-2xl text-gray-500">ADMIN LOGIN</h1>
                            <div className="border "/>
                        </div>
                        <form className="px-[20px] mt-[30px]">
                            <div className="h-[50px] my-[20px]">
                                <input name="email" className="outline-blue-500 h-full w-full border px-3" placeholder="Enter email" type="email" required/>
                            </div>
                            <div className="h-[50px] my-[20px]">
                                <input name="password" className="outline-blue-500 h-full w-full border px-3" type="password" placeholder="Enter password" required/>
                            </div>
                            <div className="h-[50px] my-2">
                                <button type="submit" className="rounded-md bg-blue-500 h-full w-full hover:bg-blue-400 hover:scale-105 transition-all text-white font-bold">
                                    LOGIN
                                </button>
                            </div>
                            <div>
                                <span className="flex gap-2">
                                    <input type="checkbox"/>
                                    <span className="text-gray-500">
                                        Remember Me
                                    </span>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}