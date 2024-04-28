import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto text-center border-2 mt-20">
            <p className="text-red-500 font-bold mb-3">No Data Has Been Found</p>
            <p className="mb-3 text-teal-600 ">Please Go Back</p>
            <Link to={-1}><button className="btn btn-accent text-white font-bold">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;