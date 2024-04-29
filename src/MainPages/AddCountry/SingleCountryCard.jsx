
import { Link } from "react-router-dom";


const SingleCountryCard = ({ data }) => {

    const { countryImage, countryDesc, countryName } = data;


    return (
        <Link to={`/allTouristSpot/${countryName}`}>
        <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
            <figure><img src={countryImage} alt="Shoes" /></figure>
            <div className="card-body my-auto">
                <h2 className="card-title text-4xl font-bold mx-auto my-auto">{countryName}</h2>
                <p className="mx-auto">{countryDesc}</p>
            </div>
        </div>
        </Link>
    );
};

export default SingleCountryCard;