import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthFirebase } from "../Firebase/FIrebase";

const Navbar = () => {

    const { user, logOut } = useContext(AuthFirebase);

    const navLink = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'bg-cyan-700 text-white font-bold rounded-lg px-4 p-2' : 'font-bold px-4 py-2'} >Home</NavLink>
        <NavLink to='/allTouristSpot' className={({ isActive }) => isActive ? 'bg-cyan-700 text-white font-bold rounded-lg px-4 p-2' : 'font-bold px-4 py-2'} >All Tourist Spot</NavLink>
        <NavLink to='/addTouristSpot' className={({ isActive }) => isActive ? 'bg-cyan-700 text-white font-bold rounded-lg px-4 p-2' : 'font-bold px-4 py-2'} >Add Tourist Spot</NavLink>
        <NavLink to='/MyList' className={({ isActive }) => isActive ? 'bg-cyan-700 text-white font-bold rounded-lg px-4 p-2' : 'font-bold px-4 py-2'} >My List</NavLink>

    </>
    return (
       
        <div className="navbar bg-violet-400 bg-opacity-20 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <NavLink to='/'>
                    <div className="flex">
                        <img src="/icons8-beach-48.png" className="" alt="" />
                        <a className="text-3xl font-bold ">Tour Way</a>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-center border-2 border-cyan-800 border-opacity-20 rounded-md hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <NavLink to='/signUp'><a className="btn bg-cyan-600 text-white font-bold">Sign Up</a></NavLink>

                {
                    user ? <a onClick={() => logOut()} className="btn bg-red-500 text-white font-bold">Sign Out</a> : <NavLink to='/signIn'><a className="btn bg-green-500 text-white font-bold">Sign In</a></NavLink>

                }

               <NavLink to='/userProfile'> <div className="w-8 h-8" data-tooltip-content={user && user.displayName} data-tooltip-id="profile">
                    <Tooltip id="profile"></Tooltip>
                    {
                        user ? <img className="w-8 h-8 rounded-2xl" src={user.photoURL} /> : <CgProfile className="w-8 h-8"></CgProfile>
                    }
                </div>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;