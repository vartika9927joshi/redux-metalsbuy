import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signupAction } from '../store/Action'

const SignUp = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        userType: "",
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
        pan: "",
        cin: "",
        gst: "",
    })
    const [allState, setAllState] = useState(
        [{ _id: "5be3e05e96adbac658328a87", country_id: "5ae8284db37516a75ac0aada", name: "uttrakahnd" },
        { _id: "5be3e05e96adbac658328a87", country_id: "5ae8284db37516a75ac0aada", name: "uttar pradesh" },
        { _id: "5afa66a5134b75ea3f74c619", country_id: "5ae8284db37516a75ac0aada", name: "Andhra Pradesh" },
        { _id: "5afa66be134b75ea3f74c61a", country_id: "5ae8284db37516a75ac0aada", name: "Arunachal Pradesh" },
        { _id: "5be3e0ae96adbac658328a88", country_id: "5ae8284db37516a75ac0aada", name: "Chandigarh" }
        ])

    const [panFile, setPanFile] = useState()
    const [gstFile, setGstFile] = useState()
    const handleSubmit = () => {
        let payloadFinal = new FormData()
        let payload = {
            first_name: user.firstName,
            last_name: user.lastName,
            email: user.email,
            companyName: user.companyName,
            fullName: "",
            password: user.password,
            mobile: user.mobile,
            userType: user.userType,
            countryCode: "",
            addressLine1: user.addressLine,
            city: user.city,
            state: user.state,
            zipCode: "",
            PAN: user.pan,
            cin: user.cin,
            gstNumber: user.gst
        }
        Object.keys(payload).forEach((item) => {
            payloadFinal.append(item, payload[item])
        })

        payloadFinal.append("PANImages", panFile)
        payloadFinal.append("gstFile", gstFile)

        //form data converts images in binary form 

        signupAction(payloadFinal, dispatch)

    }
    return (
        <div className='popup-wrapper'>
            <div className='signup-wrapper'>
                <div className='main-radio-wrp'>
                    <h3>SignUp as</h3>
                    <div className='radio-wrapp'>
                        <div className='radio-main'>
                            <input name="userType" type="radio" value="Buyer" onChange={(e) => setUser({ ...user, userType: e.target.value })} />
                            <label htmlFor='buyer'>Buyer</label>
                        </div>
                        <div className='radio-main'>
                            <input name="userType" type="radio" value="Seller" onChange={(e) => setUser({ ...user, userType: e.target.value })} />
                            <label htmlFor='seller'>Seller</label>
                        </div>
                    </div>
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Company Name' onChange={(e) => setUser({ ...user, companyName: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='first name' onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='last name' onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='mobile' onChange={(e) => setUser({ ...user, mobile: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Address Line' onChange={(e) => setUser({ ...user, addressLine: e.target.value })} />
                </div>

                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='City ' onChange={(e) => setUser({ ...user, city: e.target.value })} />
                </div>
                <div className='form-group'>
                    <select onChange={(e) => setUser({ ...user, state: e.target.value })}>
                        {allState.map((item, index) => {
                            return (
                                <option key={index} value={item._id}>{item.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Pin code' onChange={(e) => setUser({ ...user, pincode: e.target.value })} />
                </div>

                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='PAN number' onChange={(e) => setUser({ ...user, pan: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='CIN number' onChange={(e) => setUser({ ...user, cin: e.target.value })} />
                </div>

                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='GST number' onChange={(e) => setUser({ ...user, gst: e.target.value })} />
                </div>
                <div className='upload'>
                    <div className='form-group'>
                        <input type="file" className='form-control' placeholder='PAN card' onChange={(e) => setPanFile(e.target.files[0])} />
                    </div>
                    <div className='form-group'>
                        <input type="file" className='form-control' placeholder='GST' onChange={(e) => setGstFile(e.target.files[0])} />
                    </div>

                </div>

                <div className='btn-wrap'>
                    <button className='btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div >
    )
}

export default SignUp