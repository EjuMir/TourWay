
import { Link } from "react-router-dom";


const SingleCountryCard = ({ data }) => {

    const { countryImage, countryDesc, countryName } = data;


    return (
        <Link to={`/allTouristSpot/${countryName}`}>
        <div className="card w-60 h-28 bg-base-100 shadow-xl image-full">
            <figure><img src={countryImage} alt="Country Flag" /></figure>
            <div className="card-body my-auto hover:text-orange-400">
                <h2 className="card-title text-4xl hover:text-orange-400 font-bold mx-auto my-auto">{countryName}</h2>
                <p className="mx-auto hover:text-orange-400">{countryDesc}</p>
            </div>
        </div>
        </Link>
    );
};

export default SingleCountryCard;