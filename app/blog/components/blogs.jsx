import { getBlogPosts } from "@/app/lib/queries"
import SingleBlog from "./blog"

export const BLOGS = [
    {
        title:"International Women's Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"Patient's Safety in Theatre",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"World Cancer Awareness Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"International Women's Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"Patient's Safety in Theatre",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"World Cancer Awareness Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"International Women's Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"Patient's Safety in Theatre",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    },
    {
        title:"World Cancer Awareness Day",
        date:new Date().toDateString(),
        content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto vero odit itaque fugiat nostrum. Quae soluta natus consectetur laudantium. Sapiente in voluptate libero natus adipisci ipsam velit cum maxime? Ut?"
    }
].map((b,idx)=>({...b,id:idx+1}))



export default async function Blogs(){

    const blogs = await getBlogPosts();

    return(
        <div className="px-10 mt-20 mb-10 grid grid-col-1 md:grid-cols-3 gap-10">
            {
                blogs.map((blog)=>(
                    <SingleBlog blog={blog} key={blog.id}/>
                ))
            }
        </div>
    )
}