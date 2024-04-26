const AddTouristSpot = () => {
    return (
        <div>
            <h1 className='my-10 text-center text-2xl font-bold'>ADD TOURIST SPOT</h1>
            <div className="mb-10">
                <form>
                    <div className="grid grid-cols-2 gap-5 justify-center">
                        <div className="flex flex-col gap-2">
                            <h4>Tourist Spot Name :</h4>
                            <input type="text" name="spotName" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Tourist Spot Image :</h4>
                            <input type="text" name="image" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Country Name :</h4>
                            <input type="text" name="countryName" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Location :</h4>
                            <input type="text" name="location" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Short Description :</h4>
                            <input type="text" name="shortDes" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Average Cost :</h4>
                            <input type="text" name="avgCost" placeholder="Type here" className="input input-bordered input-primary w-full" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4>Seasonality :</h4>
                            <input type="text" name="season" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Travel Time :</h4>
                            <input type="text" name="time" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>Total Visitor Per Year :</h4>
                            <input type="text" name="visitor" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>User Email :</h4>
                            <input type="email" name="email" placeholder="Type here" className="input input-bordered input-primary w-full" />
                            <h4>User Name :</h4>
                            <input type="text" name="userName" placeholder="Type here" className="input input-bordered input-primary w-full" />           
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