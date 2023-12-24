import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Footer from './Footer';
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className='w-full my-5 shadow-xl'>
            
            <iframe className='w-full  md:min-h-screen relative lg:min-h-screen i' src="https://lottie.host/embed/f5300f51-2866-475d-b313-bf7009cdda8a/ldLpEaA0MF.json" ></iframe>
            <div className='absolute  shadow-xl md:top-1/2 top-32 lg:top-1/2  lg:right-1/4 md:right-1/4  lg:w-1/2 md:w-1/2   w-1/2 right-1/4'>
               <div className=' p-5'>
               <h1  className='lg:text-4xl md:text-4xl text-2xl  h  font-bold  '>Keep track of your work with Task-Manager</h1>
               <Link to={'/Login'}><button className='btn btn-outline border-b-4 border-amber-600 hover:bg-orange-400 my-4'>Explore More</button></Link>
               </div>
            </div>
   
            
           </div>
           <Footer></Footer>
        </>  
    );
};

export default Home;