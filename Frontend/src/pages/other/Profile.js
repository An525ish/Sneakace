import { Fragment, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import ProfileName from "../../components/auth/profileName";
import ProfileAddress from "../../components/auth/profileAddress";
import { useForm } from "react-hook-form";
import PersonalDetails from "../../components/profile/PersonalDetails";
import { fetchApi } from "../../utils/api";
import AddressDetails from "../../components/profile/AddressDetails";
// import EditModal from "../../components/EditModal";


const Profile = () => {
    
    return (
        <Fragment>
            <SEO
                titleTemplate="Profile"
                description="Profile page of flone react minimalist eCommerce template."
            />
            <LayoutOne headerTop="visible">

                <div className="myaccount-area pb-80 pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="ms-auto me-auto col-lg-9">
                                <div className="myaccount-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" className="single-my-account mb-20">
                                            <Accordion.Header className="panel-heading">
                                                Personal Information{" "}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <PersonalDetails/>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1" className="single-my-account mb-20">
                                            <Accordion.Header className="panel-heading">
                                                Address{" "}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <AddressDetails/>
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
