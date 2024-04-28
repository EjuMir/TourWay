
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthFirebase } from '../../Firebase/FIrebase';


const MyList = () => {
    const myList = useLoaderData();
    const firebase = useContext(AuthFirebase);
    const { user } = firebase;

    const list = myList.filter(data => data.userEmail == user.email);

    const handleDelete = id =>{
        fetch(`http://localhost:5000/allTouristSpot/${id}`, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                alert('your data has been deleted')
            }
        })
    }

    console.log(list);

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Spot Name</th>
                                <th>Country</th>
                                <th>Cost</th>
                                <th>Travel Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                list.map(data =><tr key={data._id}>
                                    <th>{data.tourSpot}</th>
                                    <td>{data.country}</td>
                                    <td>{data.cost}</td>
                                    <td>{data.travelTime}</td>
                                    <td>
                                        <button className='btn btn-primary mr-3'>Update</button>
                                        <button onClick={()=>handleDelete(data._id)} className='btn btn-error text-white'>X</button>
                                    </td>
                                </tr> )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyList;