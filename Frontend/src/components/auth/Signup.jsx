import React from 'react'
import { postApi } from '../../utils/api';
import { useForm } from 'react-hook-form';
import GoogleSignIn from '../GoogleOath/GoogleSignIn';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import MyAccount from '../../pages/other/MyAccount';

const Signup = () => {

    const navigate=useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const { data } = await postApi('/auth/signup', formData);
        changePage(formData.email);
    };

    const changePage=(data)=>{
        navigate({
            pathname:'/my-account',
            search:createSearchParams({email:data}).toString()
        })
    }

    return (
        <div className='login-form-container'>
            <div className='login-register-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                pattern: {
                                    value:
                                        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                                    message: `- at least 8 characters\n
                                            - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                                            - Can contain special characters`,
                                },
                            })}
                            placeholder='Password'
                        />
                        {errors.password && (
                            <p className='text-danger'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type='password'
                            {...register('confirmPassword', {
                                required: 'confirm password is required',
                                validate: (value, formValues) =>
                                    value === formValues.password ||
                                    'password not matching',
                            })}
                            placeholder='Confirm Password'
                        />
                        {errors.confirmPassword && (
                            <p className='text-danger'>
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className='button-box'>
                        <button type='submit'>
                            <span>Register</span>
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

export default Signup