// import React, { useEffect } from 'react';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Navbar/Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Shared/useToken';
import loginImage from '../../../background-image/login-img.png'




const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser)

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";


    if (user || gUser) {
        navigate(from, { replace: true });
    }


    /*  useEffect(() => {
         if (token) {
             console.log(gUser || user)
           
 
         }
     }, [token, from, navigate]) */

    let showError;


    if (gLoading || loading) {
        return <Loading></Loading>
    }

    if (error || gError) {

        showError = <p className='text-red-500'> {error?.message || gError?.message} </p>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)

    };



    const handleSignInWithGoogle = () => {

        signInWithGoogle()

    }

    return (

        <div className='flex justify-center items-center h-screen'>
            <div data-aos='zoom-in' data-aos-duration='1000'>
                <img className='w-3/4' src={loginImage} alt="" />
            </div>

            <div data-aos='fade-left' data-aos-duration='1000' className=" w-96  shadow-xl">
                <div className="card-body">
                    <p className='text-2xl color text-left'>Login Form</p>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <br />
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="email"
                                placeholder="Type Email"
                                className=""
                                style={{ background: 'none', border: '1px solid red', padding: '10px', borderRadius: '10px', color: 'lightgray' }}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">

                            <input
                                type="password"
                                placeholder="Type Password"
                                className=""
                                style={{ background: 'none', border: '1px solid red', padding: '10px', borderRadius: '10px', color: 'lightgray' }}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecter or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                            </label>
                        </div>
                        {showError}
                        <div className='flex justify-between items-center '>
                            <input
                                className="theButton w-24 "
                                type="submit"
                                value="Login" />

                            <span className='text-gray-400'>OR</span>

                            <button className="theButton " onClick={handleSignInWithGoogle}>Sign In With Google</button>
                        </div>

                        <br />
                        <button className='text-gray-400'>New to Account in Royal Auto Parts ? <Link className='text-red-600' to='/signup'>signup</Link> </button>

                    </form>


                </div>
            </div>

        </div>


    );
};

export default Login;