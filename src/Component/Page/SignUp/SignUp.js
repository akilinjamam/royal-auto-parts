import React from 'react';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Loading from '../../Shared/Navbar/Loading/Loading';
import useToken from '../../Shared/useToken';

import './SignUp.css'

import signup from '../../../background-image/signup-form-img.png'


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const [token] = useToken(user || gUser)



    let showError;


    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/')
    }

    if (error || gError || uError) {

        showError = <p className='text-red-500'> {error?.message || gError?.message || uError?.message} </p>
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

        console.log(data)

    };



    const handleSignInWithGoogle = () => {

        signInWithGoogle()

    }

    return (

        <div className='flex justify-center items-center h-screen'>


            <div data-aos='zoom-in' data-aos-duration='1000' className='resSignupImg' >
                <img className='w-3/4' src={signup} alt="" />
            </div>

            <div data-aos='fade-left' data-aos-duration='1000' className="">

                <div className="">

                    <p className='text-2xl color text-left'>SignUp Form</p>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <input
                                type="name"
                                placeholder="Type name"
                                className=""
                                style={{ background: 'none', border: '1px solid red', padding: '10px', borderRadius: '10px', color: 'lightgray' }}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }

                                })}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                            </label>
                        </div>


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
                                className="theButton w-22 "
                                type="submit"
                                value="Signup" />

                            <span className='text-gray-400'>OR</span>

                            <button className="theButton mr-4" onClick={handleSignInWithGoogle}>Sign In With Google</button>
                        </div>

                        <br />
                        <button className='text-gray-400'>Already has Account in Royal Auto Parts ? <Link className='text-red-600' to='/Login'>Login</Link> </button>


                    </form>

                </div>
            </div>

        </div>


    );
};

export default SignUp;