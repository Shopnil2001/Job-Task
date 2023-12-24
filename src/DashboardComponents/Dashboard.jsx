import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Dashboard = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()

    }
    return (
        <>
            <div data-theme='retro' className="navbar px-3   shadow-2xl fixed left-0 right-0 top-0  z-10">
            <a className=" text-3xl font-bold text-cyan-600 navbar-start">Task-Management</a>
            <div className="navbar-end lg:mr-6 md:mr-3">
                
               
                    

                    {
                        user ? <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                        <div tabIndex={0}  className=" m-1 items-center flex-col flex"><img className='rounded-full w-10 h-10' src={user?.photoURL} alt="" /><p>{user?.displayName}</p></div>
                        <ul tabIndex={0} className="dropdown-content items-center gap-3 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <div className="indicator mt-2">
                        <span className="indicator-item badge badge-secondary">99+</span>
                       <NavLink> <IoIosNotificationsOutline  className='text-4xl '></IoIosNotificationsOutline></NavLink>
                    </div>
                          <NavLink className='btn' to={'/'}>Home</NavLink>
                          <button className='btn btn-error' onClick={handleSignOut}>Logout</button>
                        </ul>
                      </div> : <NavLink className='btn btn-error' to={'/Login'}>Login</NavLink>
                    }
               
                

            </div>
            

        </div>
        
        </>
    );
};

export default Dashboard;