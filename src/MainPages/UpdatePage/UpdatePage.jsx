
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdatePage = () => {
    
    const loadUpdate = useLoaderData();
    const {_id, image, country, tourSpot, cost, visitor, travelTime, description, seasonality, location} = loadUpdate;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const tourSpot = form.spotName.value;
        const country = form.countryName.value;
        const location = form.location.value;
        const description = form.shortDes.value;
        const cost = form.avgCost.value;
        const seasonality = form.season.value;
        const travelTime = form.time.value;
        const visitor = form.visitor.value;

        const tourCard = { image, tourSpot, country, location, description, cost, seasonality, travelTime, visitor};

        fetch(`https://tour-5a80b4v3k-ejumirs-projects.vercel.app/allTouristSpot/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(tourCard)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Tour Spot Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className='mx-auto w-3/4 border-2 p-3 shadow-md my-10'>
            <h1 className='my-10 text-center text-2xl font-bold'>UPDATE YOUR TOURIST SPOT</h1>
            <div className="mb-10">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="grid lg:grid-cols-2 gap-5 justify-center">
                        <div className="flex flex-col gap-2">
                            <h4>Tourist Spot Name :</h4>
                            <input type="text" name="spotName" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={tourSpot} />
                            <h4>Tourist Spot Image :</h4>
                            <input type="url" name="image" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={image}/>
                            <h4>Country Name :</h4>
                            <input type="text" name="countryName" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={country} />
                            <h4>Location :</h4>
                            <input type="text" name="location" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={location}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Seasonality :</h4>
                            <input type="text" name="season" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={seasonality}/>
                            <h4>Travel Time :</h4>
                            <input type="text" name="time" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={travelTime}/>
                            <h4>Total Visitor Per Year :</h4>
                            <input type="text" name="visitor" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={visitor}/>
                            <h4>Average Cost :</h4>
                            <input type="number" name="avgCost" placeholder="Type here" className="input input-bordered input-primary w-full" defaultValue={cost}/>
                        </div>
                        </div>

                        <div className=" grid col-span-2">
                        <h4 className='text-center mt-3'>Short Description :</h4>
                            <input type="text" name="shortDes" placeholder="Type here" className="input input-bordered input-primary w-full mb-5" defaultValue={description}/>
                            <input type="submit" value="Update" className="btn btn-accent text-white font-bold" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePage;