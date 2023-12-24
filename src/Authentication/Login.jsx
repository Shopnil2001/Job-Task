
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Navbar from '../Navbar';
// import useAxios from '../Hooks/useAxios';

const Login = () => {
    
   
    const {SignIn, googleSignIn}= useContext(AuthContext)
    const [erMessage, setErMessage] =useState('')
    // const axiosPublic =useAxios()
    const location= useLocation();
    const navigate =useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        setErMessage('')

        SignIn(email, password)
        .then(result =>{
            console.log(result.user)
        
            
            navigate(location?.state ? location.state : '/dashboard')
            
        })
        .catch(error=>{
            setErMessage('please check email/password')
        } 

        )
    }
    const handleGSignIn = () =>{
        const provider = new GoogleAuthProvider();

        googleSignIn(provider)
        .then(Result=>{
            navigate('/dashboard')
           console.log(Result._tokenResponse.email)

     
          
        })
        .catch()
    }
    return (
        
        <>
        <Navbar></Navbar>
        <div>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Login' />
                            </div>
                            
                        </form>
                        {
                            erMessage&& <p  className='text-red-500 ml-3'>{erMessage}</p>
                        }
                            <button onClick={handleGSignIn} className="btn btn-outline btn-success mx-auto rounded-full  " ><img className='w-8 rounded-full' src="https://i.ibb.co/DkW07NG/google-logo-icon-134448.png" alt="" /></button>
                        <p className='ml-3 mb-3'>Do not have account? <Link  className='text-sky-600' to={'/Register'}>...Register</Link></p>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Login;