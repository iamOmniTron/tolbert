


export default function VideoSection(){

    return(
        <div className="w-full min-h-[40vh] relative flex flex-col md:flex-row gap-2 px-10 my-5">
            <div className="md:w-[50%] h-full">
                <div className="my-2 text-red-400 font-bold text-xl">
                    Video of the Month
                </div>
                <div className="text-gray-500 italic">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sequi ab expedita possimus adipisci? Itaque tempore excepturi iste voluptates vitae consequatur. Eos, quasi? Excepturi dicta cum magni impedit provident ipsa.
                    Id ex esse deserunt velit! Temporibus dolorem beatae quibusdam laboriosam? Error eum, praesentium earum eaque aspernatur alias, culpa excepturi harum tempore ea cum iure odit. Officiis deleniti harum nobis nihil?
                </div>
            </div>
            <div className="flex-1">
                <iframe
                    width={560}
                    height={315}
                    allowFullScreen
                    src=""
                    title="Video of the Month"
                    allow="accelerometer;autoplay;clipboard-write"
                />
            </div>
        </div>
    )
}