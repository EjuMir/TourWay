
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddCountry = () => {
    
    
    const handleSubmit = e =>{
         e.preventDefault();
         const form = e.target;
         const countryImage = form.image.value;
         const countryName = form.countryName.value;
         const countryDesc = form.countryDes.value;
         const countryCard = {countryImage, countryDesc, countryName};

         fetch('http://localhost:5000/country', {
            method : 'POST',
            headers : {'content-type':'application/json'},
            body : JSON.stringify(countryCard)
         })
         .then(res=>res.json())
         .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Country has been added successfully',
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
            <h1 className='my-10 text-center text-2xl font-bold'>ADD COUNTRY</h1>
            <div className="mb-10">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="flex flex-col gap-2">
                            <h4>Country Image :</h4>
                            <input type="url" name="image" placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                            <h4>Country Name :</h4>
                            <input type="text" name="countryName" placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                            <h4>Country Description :</h4>
                            <input type="text" name="countryDes" placeholder="Type here" className="input input-bordered input-primary w-full" required/>
                        </div>
                        <div className='text-center mt-5'>
                        <input type="submit" value="ADD COUNTRY" className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCountry;