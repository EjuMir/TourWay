

const SingleTourSpot = ({data}) => {


    const {image, tourSpot, cost, visitor, travelTime, seasonality} = data;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className="w-full h-72" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Place : </span>{tourSpot}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Cost : </span>{cost}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Total Visitors : </span>{visitor}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Travel Time : </span>{travelTime}</h2>
                    <h2 className="card-title"><span className="text-orange-400 text-xl font-bold">Season : </span>{seasonality}</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTourSpot;