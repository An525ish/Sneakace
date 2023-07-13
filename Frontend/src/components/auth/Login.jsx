import React from 'react'
// import { postApi } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleOath/GoogleSignIn';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAsync, selectError, selectLoggedInUser } from '../../store/slices/auth-slice';

const Login = () => {

    const error = useSelector(selectError);
    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch()
    console.log(error)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onLoginSubmit = async (data) => {
        // const { data } = await postApi('/auth/login', formData)
        // console.log(data);
        dispatch(
            loginUserAsync({ email: data.email, password: data.password })
        );
    };

    return (
        <>
            {user && <Navigate to="/" replace={true}></Navigate>}
            <div className='login-form-container'>
                <div className='login-register-form'>
                    <form
                        noValidate
                        onSubmit={()=>handleSubmit(onLoginSubmit)}
                    >
                        <div>
                            <input
                                type='text'
                                {...register('email', {
                                    required: 'email is required',
                                    pattern: {
                                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                        message: 'Email not valid',
                                    },
                                })}
                                placeholder='Email'
                            />
                            {errors.email && (
                                <p className='text-danger'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <input
                                type='password'
                                {...register('password', {
                                    required: 'password is required',
                                })}
                                placeholder='Password'
                            />
                            {errors.password && (
                                <p className='text-danger'>
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        {error && <p className="text-danger">{error.message || error.toString()}</p>}
                        <div className='button-box'>
                            <div className='login-toggle-btn'>
                                <input type='checkbox' />
                                <label className='ml-10'>Remember me</label>
                                <Link to={process.env.PUBLIC_URL + '/forgot-password'}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <button type='submit'>
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                    <div className='mt-3 d-flex justify-content-center'>
                        <GoogleSignIn />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login