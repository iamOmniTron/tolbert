import NoDataComponent from "@/app/components/noData/noData";
import { trimText } from "@/app/lib/helpers";
import { getReviews } from "@/app/lib/queries"
import DeleteTestimonialButton from "./deleteTestimonialButton";
import ToggleTestimonialVisbilityButton from "./toggleTestimonialVisbilityButton";



export default async function ReviewsTable(){

    const reviews = await getReviews(); 

    return(
        <table className="w-full bg-white rounded-md">
            <thead>
                <tr className="border-b-2 px-2">
                    <th className="font-bold pl-2">S/N</th>
                    <th className="font-bold pl-2">Name</th>
                    <th className="font-bold pl-2">Comment</th>
                    <th className="font-bold pl-2">Rating</th>
                    <th className="font-bold pl-2">Actions</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    reviews.length > 0 ?
                    reviews.map((review,idx)=>(
                    <tr key={idx} className="cursor-pointer border-b-2 h-[50px] hover:shadow-lg">
                            <td className="font-bold pl-2">
                                {idx+1}
                            </td>
                            <td>
                                {review.name}
                            </td>
                            <td>
                                {trimText(review.review,15)}
                            </td>
                            <td>
                                <span className={`${review.rating < 3 ?"bg-red-600":review.rating > 3 ?"bg-green-600":"bg-orange-600"} py-2 px-3 rounded-md font-bold text-white`}>
                                        {review.rating}
                                </span>
                            </td>
                            <td className=" space-x-2 items-center">
                                <DeleteTestimonialButton review={review}/>
                                <ToggleTestimonialVisbilityButton testimonial={review}/>
                            </td>
                    </tr>
                    ))
                    :
                    <th colSpan={5}>
                        <NoDataComponent/>
                    </th>
                }
            </tbody>
        </table>
    )
}