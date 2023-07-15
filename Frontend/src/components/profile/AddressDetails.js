import React, { useEffect, useState } from 'react'
import { fetchApi, patchApi } from "../../utils/api";
import { useForm } from 'react-hook-form';
import cogoToast from "cogo-toast";
import { useNavigate } from 'react-router-dom';

const AddressDetails = () => {

    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const {email} = JSON.parse(localStorage.getItem( 'userDetails'));    


    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchApi(`/auth/own/` + email)

            console.log(result.data)
            setAddress(result.data.address)
            setZipcode(result.data.zipcode);
            setState(result.data.state)
            setCity(result.data.city)
        };

        fetchData();
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addressSubmit = async (addressData) => {
        console.log(addressData, "address")
        console.log(email)
        const { data } = await patchApi(`/auth/` + email, addressData);
        console.log(data, "address");
        cogoToast.success("Edited address", {position: "top-left"});
        setModal(false);
    };

    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true);
    }

    return (
        <div>
            {!modal ? <div className="myaccount-info-wrapper">
                <div className="account-info-wrapper">
                    View/Edit your address
                </div>
                <div className="profile-edit-fields">
                    <div>
                        <h4 style={{ fontWeight: 'bold' }}>Address:</h4>
                        <h5>{address}{", "}{city}{", "}{state}{", "}{zipcode}</h5>
                    </div>
                    <button className="profile-edit-button" onClick={openModal}>Edit</button>
                </div>
            </div>
                :
                <div className="myaccount-info-wrapper">
                    <form onSubmit={handleSubmit(addressSubmit)}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                    <label>Address(House No, Street Name, Landmark)</label>
                                    <input type="string"
                                        value={address}
                                        {...register('address')}
                                        onChange={(e)=>setAddress(e.target.value)}

                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                    <label>Zipcode</label>
                                    <input type="string"
                                    value={zipcode}
                                        {...register('zipcode')}
                                        onChange={(e)=>setZipcode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                    <label>State</label>
                                    <input type="string"
                                    value={state}
                                        {...register('state')}
                                        onChange={(e)=>setState(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                    <label>City</label>
                                    <input type="string"
                                    value={city}
                                        {...register('city')}
                                        onChange={(e)=>setCity(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="billing-back-btn">
                            <div className="billing-btn">
                                <button type="submit">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default AddressDetails