import NoDataComponent from "@/app/components/noData/noData";
import { getBlogPosts } from "@/app/lib/queries"
import { trimText } from "@/app/lib/helpers";
import EditPostButton from "./editPostButton";
import DeletePostButton from "./deletePostButton";



export default async function PostsTable(){

    const blogs = await getBlogPosts();

    return(
        <table className="w-full bg-white rounded-md">
                <thead>
                        <tr className="border-b-2 px-2">
                            <th className="font-bold pl-2">S/N</th>
                            <th className="font-bold">Title</th>
                            <th className="font-bold">Content</th>
                            <th className="font-bold">Author</th>
                            <th className="font-bold">Date</th>
                            <th className="font-bold">Action</th>
                        </tr>
                </thead>
                <tbody className="text-center">
                            {
                               blogs.length > 0 ? blogs.map((d,idx)=>(
                                    <tr key={idx} className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg">
                                        
                                        <td className="font-bold pl-2">
                                            {idx+1}
                                        </td>
                                        <td>
                                            {trimText(d.title,12)}
                                        </td>
                                        <td>
                                            {trimText(d.content,12)}
                                        </td>
                                        <td>
                                            {d.author}
                                        </td>
                                        <td>
                                            {new Date(d.createdAt).toDateString()}
                                        </td>
                                        <td className="flex gap-2">
                                           <EditPostButton item={d}/>
                                            <DeletePostButton item={d}/>
                                        </td>
                                     </tr>
                                )):
                                <th colSpan={6}>
                                    <NoDataComponent/>
                                </th>
                            }
                </tbody>
            </table>
    )

}