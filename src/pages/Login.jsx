import React, { use, useState } from 'react';
import loginImg from "../assets/volunteer1.jpg"
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import Swal from 'sweetalert2';

const Login = () => {

    const [error, setError] = useState("");
    const {signInUser} =use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
        .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: `Welcome back, ${result.user.displayName || 'User'}!`,
                    timer: 2000,
                    showConfirmButton: false
                });
                navigate(location.state?.from || "/");
            })
            .catch((error) => {
                setError(error.message);

                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                    confirmButtonColor: '#0FA4AF'
                });
            });
    }
    return (
        <div className="min-h-screen flex flex-col md:flex-row my-8">
            <div className="md:w-1/2 w-full flex flex-col justify-center  items-center px-10 py-20 rounded-tl-3xl rounded-bl-3xl">
                <div className="w-full max-w-sm shadow-2xl rounded-3xl p-3">
                    <h2 className="text-3xl font-semibold mb-6">Login Now!</h2>
                    <form onSubmit={handleLogin} className="space-y-5">
                        <input type="email" name='email' placeholder="Email" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <input type="password" name='password' placeholder="Password" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-sm text-red-400'>{error}</p>}

                        <button className="w-full bg-[#0FA4AF] hover:bg-[#519ea3] transition p-3 rounded-xl text-white font-medium">Login</button>
                        <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to="/register" className='text-[#0FA4AF]'>Register</Link> </p>
                    </form>

                    <div className="mt-6 flex justify-center gap-4">
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 w-full relative flex items-center justify-center p-10 bg-gradient-to-b from-[#d7e4e6] to-[#21d2df] rounded-tr-3xl rounded-br-3xl shadow-lg">
                <img
                    src={loginImg}
                    alt="Teamwork"
                    className="w-full h-full object-cover rounded-3xl shadow-xl"
                />
            </div>
        </div>
    );
};

export default Login;
