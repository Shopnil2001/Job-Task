import React, { useContext } from 'react';
import { AuthContext } from './Authentication/AuthProvider';
import { NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io"

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext);

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()

    }
    return (
        <div data-theme='retro' className="navbar px-3 py-4  shadow-2xl fixed left-0 right-0 top-0  z-10">
            <a className=" text-3xl font-bold text-cyan-600 navbar-start">Task-Management</a>
            <div className="navbar-end lg:mr-6 md:mr-3">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 items-center z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52">

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">99+</span>
                       <NavLink> <IoIosNotificationsOutline  className='text-4xl '></IoIosNotificationsOutline></NavLink>
                    </div>
                        {
                            user ? <button className='btn btn-primary' onClick={handleSignOut}>Logout</button> : <NavLink className='btn btn-error' to={'/Login'}>Login</NavLink>
                        }
                    </ul>
                </div>

            </div>
            <div className="navbar-end hidden  lg:flex">
                <ul className="menu menu-horizontal justify-center flex items-center gap-10 px-1">
                <div className="indicator">
                        <span className="indicator-item badge badge-secondary">99+</span>
                       <NavLink> <IoIosNotificationsOutline  className='text-4xl '></IoIosNotificationsOutline></NavLink>
                    </div>

                    {
                        user ? <button className='btn btn-error' onClick={handleSignOut}>Logout</button> : <NavLink className='btn btn-error' to={'/Login'}>Login</NavLink>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Navbar;