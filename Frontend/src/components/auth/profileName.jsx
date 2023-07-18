import React from 'react'
import { patchApi } from "../../utils/api";
import { useForm } from 'react-hook-form';
import cogoToast from "cogo-toast";

const ProfileName = () => {

    const {email} = JSON.parse(localStorage.getItem( 'userDetails'));    

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const personalDetailsSubmit = async (formData) => {
        // console.log(formData,"mail")
        console.log(email)
        const { data } = await patchApi(`/auth/`+email, formData);
        console.log(data,"name");
        cogoToast.success("Added the name", {position: "top-left"});
      };

    return (
        <div className="myaccount-info-wrapper">
            <div className="account-info-wrapper">
                <h4>My Account Information</h4>
                <h5>Your Personal Details</h5>
            </div>
            <form onSubmit={handleSubmit(personalDetailsSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>First Name</label>
                            <input type="string"
                                {...register('firstName', {
                                    required: 'Please enter first name'
                                })}
                            />
                            {errors.firstName && (
                                <p className='text-danger'>
                                    {errors.firstName.message}
                                </p>
                            )} 
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>Last Name</label>
                            <input type="string"
                                {...register('lastName', {
                                    required: 'Please enter last name'
                                })}
                            />
                            {errors.lastName && (
                                <p className='text-danger'>
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileName