import React, { useEffect } from 'react'
import { Fragment, useState } from "react";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchApi, patchApi } from '../../utils/api';
import cogoToast from 'cogo-toast';

const PersonalDetails = () => {

    const navigate=useNavigate();

    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("hersheys@gmail.com")
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchApi(`/auth/own/`+email)

          console.log(result.data)
          setfirstName(result.data.firstName)
          setLastName(result.data.lastName);
          setEmail(result.data.email)
        };
     
        fetchData();
      }, [email]);
    
      
    const [editEmail, setEditEmail] = useState(email)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const personalDetailsEdit = async (editData) => {
        // console.log(formData,"mail")
        console.log(editData)
        const { data } = await patchApi(`/auth/`+email, editData);
        console.log(data,"name");
        cogoToast.success("Edited personal details", {position: "top-left"});
        setEmail(editEmail)
        setModal(false);
        // window.location.reload(true);
      };

    const openModal = () => {
        setModal(true);
    }

  return (
    <div>{!modal ? <div className="myaccount-info-wrapper">
    <div className="account-info-wrapper">
        View/Edit your personal information
    </div>
    <div className="profile-edit-fields">
        <div>
            <h4 style={{ fontWeight: 'bold' }}>Name:</h4>
            <h5>{firstName}{" "}{lastName}</h5>
        </div>
    </div>
    <div className="profile-edit-fields">
        <div>
            <h4 style={{ fontWeight: 'bold' }}>Email:</h4>
            <h5>{email}</h5>
        </div>
        <button className="profile-edit-button" onClick={openModal}>Edit</button>
    </div>
</div>
    :
    <div className="myaccount-info-wrapper">
        <div className="account-info-wrapper">
            <form onSubmit={handleSubmit(personalDetailsEdit)}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>First Name</label>
                            <input type="string"
                                value={firstName}
                                {...register('firstName', {
                                    required: 'Please enter first name'
                                })}
                                onChange={(e)=>setfirstName(e.target.value)}
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
                                value={lastName}
                                {...register('lastName')}
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                            {errors.lastName && (
                                <p className='text-danger'>
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="billing-info">
                            <label>Email</label>
                            <input type="string"
                                value={editEmail}
                                {...register('email')}
                                onChange={(e)=>setEditEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className='text-danger'>
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="billing-back-btn">
                    <div className="billing-btn">
                        <button type="submit">Save Changes</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}</div>
  )
}

export default PersonalDetails