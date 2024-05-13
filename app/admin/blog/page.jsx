import NewPostButton from "./components/newPostButton";
import PostsTable from "./components/postsTable";





export default function Blog(){

    return(
        <div className="mb-3">
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                    BLOG POSTS
                </span>
            </div>
            <div className="w-full flex justify-end my-3">
                <NewPostButton/>
            </div>
            <div lassName="h-full w-[60%] px-2">
            <PostsTable/>
            </div>
        </div>
    )
}