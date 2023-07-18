import React from 'react'
import { patchApi } from "../../utils/api";
import { useForm } from 'react-hook-form';
import cogoToast from "cogo-toast";
import { useNavigate } from 'react-router-dom';

const ProfileAddress = () => {

    const navigate=useNavigate();
    const {email} = JSON.parse(localStorage.getItem( 'userDetails'));    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addresses=[];


    const addressSubmit = async (addressData) => {
        console.log(addressData, "address")
        
        const { data } = await patchApi(`/auth/` + email, addressData);
        console.log(data,"address");
        data && cogoToast.success("Added the address", { position: "top-left" });
        navigate('/')
    };

    return (
        <div className="myaccount-info-wrapper">
            <form onSubmit={handleSubmit(addressSubmit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>Address(House No, Street Name, Landmark)</label>
                            <input type="string"
                                {...register('address', {
                                    required: 'Required field'
                                })}
                            />
                            {errors.address && (
                                <p className='text-danger'>
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>Zipcode</label>
                            <input type="string"
                                {...register('zipcode',{
                                    required: 'Required field'
                                })}
                            />
                            {errors.zipcode && (
                                <p className='text-danger'>
                                    {errors.zipcode.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>State</label>
                            <input type="string"
                                {...register('state', {
                                    required: 'Required field'
                                })}
                            />
                            {errors.state && (
                                <p className='text-danger'>
                                    {errors.state.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>City</label>
                            <input type="string"
                                {...register('city', {
                                    required: 'Required field'
                                })}
                            />
                            {errors.city && (
                                <p className='text-danger'>
                                    {errors.city.message}
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

export default ProfileAddress