import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthFirebase } from '../../Firebase/FIrebase';
import { ToastContainer, toast } from 'react-toastify';

const AddTouristSpot = () => {

    const {user} = useContext(AuthFirebase)
    
    const handleSubmit = e =>{
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
         const userName = form.userName.value;
         const userEmail = form.email.value

         const tourCard = {image, tourSpot, country, location, description, cost, seasonality, travelTime, visitor, userName, userEmail};
         
         if(user.email != userEmail){
            return toast.error('Please Put Correct Email Which You Are Logged In')
         }

         fetch('https://tour-5a80b4v3k-ejumirs-projects.vercel.app/allTouristSpot', {
            method : 'POST',
            headers : {'content-type':'application/json'},
            body : JSON.stringify(tourCard)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Tour Spot has been added successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  form.reset();
            }
         })
    }

    return (
        <div className='mx-auto w-3/4 border-2 p-3 shadow-md my-10'>
           <ToastContainer></ToastContainer>
            <h1 className='my-10 text-center text-2xl font-bold'>ADD TOURIST SPOT</h1>
            <div className="mb-10">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="grid lg:grid-cols-2 gap-5 mb-5">
                        <div className="flex flex-col gap-2">
                            <h4>Tourist Spot Name :</h4>
                            <input type="text" name="spotName" placeholder="Type here" className="input input-bordered input-primary w-full"/>
                            <h4>Tourist Spot Image :</h4>
                            <input type="url" name="image" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Country Name :</h4>
                            <input type="text" name="countryName" placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                            <h4>Location :</h4>
                            <input type="text" name="location" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Short Description :</h4>
                            <input type="text" name="shortDes" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Average Cost :</h4>
                            <input type="number" name="avgCost" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Seasonality :</h4>
                            <input type="text" name="season" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Travel Time :</h4>
                            <input type="text" name="time" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Total Visitor Per Year :</h4>
                            <input type="text" name="visitor" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>User Email :</h4>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                            <h4>User Name :</h4>
                            <input type="text" name="userName" placeholder="Type here" className="input input-bordered input-primary w-full" />           
                        </div>
                        </div>
                        
                        <div className=" grid col-span-2">
                        <input type="submit" value="ADD SPOT" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot;