import { useLoaderData } from "react-router-dom";
import SingleTourSpot from "./SingleTourSpot";
import { AuthFirebase } from "../../Firebase/FIrebase";
import { useContext } from "react";

const AllTouristSpot = () => {

    const loadData = useLoaderData();
    const {loading} = useContext(AuthFirebase)

    if(loading){
        return <div className="mx-auto text-center mt-10"><p className="loading loading-bars loading-lg"></p></div>
    }

    return (
        <div className="grid grid-cols-3 place-items-center">
            {
                loadData.map(data => <SingleTourSpot key={data._id} data={data}></SingleTourSpot>)
            }
        </div>
    );
};

export default AllTouristSpot;