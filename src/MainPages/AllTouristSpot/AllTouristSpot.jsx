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
        <div>
        <div className="grid lg:grid-cols-3 place-items-center my-10 gap-5">
            {
                loadData.map(data => <SingleTourSpot key={data._id} data={data}></SingleTourSpot>)
            }
        </div>
        </div>
    );
};

export default AllTouristSpot;