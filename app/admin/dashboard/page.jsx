import Cards from "./components/cards";


import DashboardTable from "./components/table";
import MostRecentBlogPost from "./components/blogPost";



export default function Dashboard(){

    return(
        <div className="mb-3">
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 DASHBOARD PAGE
                </span>
            </div>
            <div>
                <Cards/>
            </div>
            <div className="flex space-x-3 min-h-[30vh] mt-3">
                <div className="h-full w-[60%] px-2">
                    <div className="mt-2 mb-2">
                        <span className="font-bold text-md">
                            Recent Appointments
                        </span>
                    </div>
                    <DashboardTable/>
                </div>
                <div className="h-full w-[40%] px-2">
                <div className="mt-2 mb-2">
                        <span className="font-bold text-md">
                            Most Recent Blog Post
                        </span>
                    </div>
                    <MostRecentBlogPost/>
                </div>
            </div>
        </div>
    )
}