import { useLoaderData } from "react-router-dom";
import { AuthFirebase } from "../../Firebase/FIrebase";
import { useContext } from "react";

const ViewDetails = () => {
    
    const loadViewDetails = useLoaderData();
    const {image, tourSpot, country, description, cost, seasonality, userName} = loadViewDetails;

    const {loading} = useContext(AuthFirebase)

    if(loading){
        return <div className="mx-auto text-center mt-10"><p className="loading loading-bars loading-lg"></p></div>
    }

    return (
        <div className="my-14">
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-gradient-to-t from-blue-400 to to-white opacity-50 text-cyan-900">
                    <h1 className="mb-5 text-5xl font-bold">{tourSpot}, {country}</h1>
                    </div>
                    <hr className="border-2 border-orange-300 w-96 rotate-90 opacity-70" />
                    <div className="max-w-md border bg-gradient-to-t from-blue-400 to to-white text-start text-black opacity-50">
                        <p className="mb-5 text-2xl font-semibold">{description}</p>
                        <p className="mb-5 text-xl font-semibold">Season : {seasonality}</p>
                        <p className="mb-5 text-xl font-semibold">Cost : {cost}</p>
                        <p className="mb-5 text-xl font-bold">By : {userName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;