import { Link, useNavigate } from 'react-router';
import regImg from "../assets/register.jpg"
import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Register = ({from}) => {

    const {createUser, setUser, updateUser, signInWithGoogle} =use(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        createUser(email, password)
        .then((result) => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful!',
                        text: `Welcome, ${name}!`,
                        timer: 2000,
                        showConfirmButton: false
                    });
                    navigate("/")
                })
        .catch((error) => {
                        setUser(user);
                        Swal.fire({
                            icon: 'warning',
                            title: 'Profile Update Failed',
                            text: error.message,
                            confirmButtonColor: '#0FA4AF'
                        });
                    });
            })        
        .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: error.message,
                    confirmButtonColor: '#0FA4AF'
                });
            })  
    }

    const handleGoogle = () => {
            signInWithGoogle()
            .then((result) => {
                setUser(result.user)
                navigate(from || "/")
    
            Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: `Welcome, ${result.user.displayName}!`,
            confirmButtonColor: '#0FA4AF'
          });
            }).catch((error) => {
                Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: error.message,
                        confirmButtonColor: '#d33'
                      });
            })
        }
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <Helmet>
                <title>My Eleventh Assignment | Register</title>
            </Helmet>
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-10 py-20">
                <div className="w-full max-w-sm">
                    <h2 className="text-3xl font-semibold mb-6">Create an account</h2>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <input type="text" name='name' placeholder="Full name" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <input type="email" name='email' placeholder="Email" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <input type="text" name='photo' placeholder="Photo URL" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <input type="password" name='password' placeholder="Password" className="w-full p-3 rounded-xl shadow-sm border border-gray-200 focus:outline-none" />

                        <button className="w-full bg-[#0FA4AF] hover:bg-[#519ea3] transition p-3 rounded-xl text-white font-medium">Register</button>
                        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to="/login" className='text-[#0FA4AF]'>Login</Link> </p>
                    </form>

                    <div className='text-center my-5'>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogle} className="btn bg-white text-black shadow-lg">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 w-full relative flex items-center justify-center p-10 bg-gradient-to-b from-[#d7e4e6] to-[#0FA4AF] rounded-br-md shadow-lg">
                <img
                    src={regImg}
                    alt="Teamwork"
                    className="w-full h-full object-cover rounded-3xl shadow-xl"
                />
            </div>
        </div>
    );
};

export default Register;
