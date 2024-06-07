
import { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthFirebase } from '../../Firebase/FIrebase';
import Swal from 'sweetalert2';


const MyList = () => {
    const myList = useLoaderData();
    const firebase = useContext(AuthFirebase);
    const { user } = firebase;
    

    const list = myList.filter(data => data.userEmail == user.email);
    const [card, setCard] = useState(list);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          })
          .then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourway-ph-10.vercel.app/allTouristSpot/${id}`, {
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remaining = card.filter(element => element._id != id);
                        setCard(remaining);
                    }
                })
            } 
          });
    }

    return (
        <div className='my-14'>
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
                                card.map(data =><tr key={data._id}>
                                    <th>{data.tourSpot}</th>
                                    <td>{data.country}</td>
                                    <td>{data.cost}</td>
                                    <td>{data.travelTime}</td>
                                    <td>
                                        <Link to={`/updateCard/${data._id}`}><button className='btn btn-primary mr-3'>Update</button></Link>
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