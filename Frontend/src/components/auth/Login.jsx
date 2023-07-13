import React from 'react'
import { postApi } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleOath/GoogleSignIn';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onLoginSubmit = async (formData) => {
         const {data} = await postApi('/auth/login', formData)
        console.log(data);
      };

    return (
        <div className='login-form-container'>
            <div className='login-register-form'>
                <form
                    onSubmit={handleSubmit(onLoginSubmit)}
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
                        {errors.loginemail && (
                            <p className='text-danger'>
                                {errors.loginemail.message}
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
                        {errors.loginpassword && (
                            <p className='text-danger'>
                                {errors.loginpassword.message}
                            </p>
                        )}
                    </div>
                    {/* {error && (
                                <p className='text-red-500'>
                                  {error || error.message}
                                </p>
                              )} */}
                    <div className='button-box'>
                        <div className='login-toggle-btn'>
                            <input type='checkbox' />
                            <label className='ml-10'>Remember me</label>
                            <Link to={process.env.PUBLIC_URL + '/'}>
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
    )
}

export default Login