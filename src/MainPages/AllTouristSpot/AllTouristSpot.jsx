import { useLoaderData } from "react-router-dom";
import SingleTourSpot from "./SingleTourSpot";

const AllTouristSpot = () => {

    const loadData = useLoaderData();

    return (
        <div className="grid grid-cols-3 place-items-center">
            {
                loadData.map(data => <SingleTourSpot key={data._id} data={data}></SingleTourSpot>)
            }
        </div>
    );
};

export default AllTouristSpot;