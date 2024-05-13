import ClientsTable from "./components/clientsTable";
import NewClientButton from "./components/newClientButton";




export default function ClientsSettings(){

    return(
        <div className="w-full">
            <div className="h-[50px] bg-white mt-2 w-full flex items-center pl-3">
                <span className="text-gray-500 font-bold">
                 FRONT PAGE SETTINGS / CLIENTS SECTION
                </span>
            </div>
            <div className="w-full flex justify-end my-3">
                <NewClientButton/>
            </div>
            {/* <div className="w-full h-[70vh] bg-white p-4 mt-3 text-gray-500 flex justify-center"> */}
                <ClientsTable/>
            {/* </div> */}
        </div>
    )
}