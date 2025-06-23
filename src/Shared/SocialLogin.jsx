import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SocialLogin = ({ from }) => {
  const { signInWithGoogle, setUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(from || "/");

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Welcome, ${result.user.displayName || 'User'}!`,
          confirmButtonColor: '#0FA4AF'
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.message,
          confirmButtonColor: '#d33'
        });
        console.error('Google login error:', error);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
          <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
          <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
          <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
