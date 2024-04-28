import { Link } from "react-router-dom";

const HomeCard = ({card}) => {
    
    const {_id, image, tourSpot, cost, visitor, travelTime, seasonality} = card;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className="w-full h-72" alt="Tour Picture" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Place : </span>{tourSpot}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Cost : </span>{cost}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Total Visitors : </span>{visitor}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Travel Time : </span>{travelTime}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Season : </span>{seasonality}</h2>
                    <div className="card-actions justify-end">
                       <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;