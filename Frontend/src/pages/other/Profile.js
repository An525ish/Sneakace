import { Fragment, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ProfileName from "../../components/auth/profileName";
import ProfileAddress from "../../components/auth/profileAddress";
import { useForm } from "react-hook-form";
// import EditModal from "../../components/EditModal";


const Profile = () => {

    const [firstName, setfirstName] = useState("Harshita");
    const [lastName, setLastName] = useState("Lakhchaura");
    const [email, setEmail] = useState("harshita@gmail.com")
    const [modal, setModal] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const openModal = () => {
        setModal(true);
    }

    return (
        <Fragment>
            <SEO
                titleTemplate="Profile"
                description="Profile page of flone react minimalist eCommerce template."
            />
            <LayoutOne headerTop="visible">

                <div className="myaccount-area pb-80 pt-100">
                    <div className="container">
                        <h2 className="profile-heading">Hello {firstName}!!</h2>
                        <div className="row">
                            <div className="ms-auto me-auto col-lg-9">
                                <div className="myaccount-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" className="single-my-account mb-20">
                                            <Accordion.Header className="panel-heading">
                                                Personal Information{" "}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {!modal ? <div className="myaccount-info-wrapper">
                                                    <div className="account-info-wrapper">
                                                        View/Edit your personal information
                                                    </div>
                                                    <div className="profile-edit-fields">
                                                        <div>
                                                            <h4 style={{ fontWeight: 'bold' }}>Name:</h4>
                                                            <h5>{firstName}{" "}{lastName}</h5>
                                                        </div>
                                                        <button className="profile-edit-button" onClick={openModal}>Edit</button>
                                                    </div>
                                                    <div className="profile-edit-fields">
                                                        <div>
                                                            <h4 style={{ fontWeight: 'bold' }}>Email:</h4>
                                                            <h5>{email}</h5>
                                                        </div>
                                                        <button className="profile-edit-button">Edit</button>
                                                    </div>
                                                </div>
                                                    :
                                                    <div className="myaccount-info-wrapper">
                                                        <div className="account-info-wrapper">
                                                            <form>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6">
                                                                        <div className="billing-info">
                                                                            <label>First Name</label>
                                                                            <input type="string"
                                                                                value={firstName}
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
                                                                                value={lastName}
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
                                                                    <div className="col-lg-6 col-md-6">
                                                                        <div className="billing-info">
                                                                            <label>Email</label>
                                                                            <input type="string"
                                                                                value={email}
                                                                                {...register('email', {
                                                                                    required: 'Please enter last name'
                                                                                })}
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
                                                                        <button type="submit">Continue</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                }
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </LayoutOne>
        </Fragment>
    );
};

export default Profile;
