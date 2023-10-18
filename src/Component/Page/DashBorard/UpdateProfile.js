import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTools from '../../Shared/useTools';

const UpdateProfile = () => {

    const { uId } = useParams()
    const navigate = useNavigate()



    const [education, setEducation] = useState('');
    const [location, setLocation] = useState('');
    const [linkdin, setLinkDin] = useState('');



    const [profile, setProfile] = useState([])

    const updateProfile = (event) => {
        event.preventDefault();

        const updateProfileData = {
            education: education,
            location: location,
            linkdin: linkdin
        }


        // send data to the server:
        const url = `https://royal-autoparts-re-server.onrender.com/profile/${uId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProfileData)
        })
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                console.log(data)

                if (data) {
                    toast.success('updated successfully');
                    // event.target.reset()
                }
            })
    }

    useEffect(() => {
        const url = 'https://royal-autoparts-re-server.onrender.com/profile';
        fetch(url).then(res => res.json()).then(res => setProfile(res));
    }, []);

    const findProfile = profile?.find(f => {
        return f?._id === uId;
    })

    useEffect(() => {
        setEducation(findProfile?.education);
        setLocation(findProfile?.location);
        setLinkDin(findProfile?.linkdin);
    }, [findProfile])

    return (
        <div>
            <div className='text-left'>


                <h2 className='color font-bold text-2xl text-left theFonts'>Update profile </h2>
                <br />
                <p className='text-red-400 pb-3 border-b-2 border-red-400 mr-4'>Profile ID : {uId}</p><br />

                <form onSubmit={updateProfile} action="">

                    <textarea
                        style={{ background: "none", color: 'white', border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }}
                        type="text"
                        placeholder="Type Education"
                        required
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                    <br /><br />
                    <input style={{ background: "none", color: 'white', border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }}
                        type="text"
                        placeholder="Type Location City/District"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    /><br /><br />

                    <input
                        style={{ background: "none", color: 'white', border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }}
                        type="text"
                        placeholder="Type Linkdin profile name"
                        required
                        value={linkdin}
                        onChange={(e) => setLinkDin(e.target.value)}
                    /><br /><br />

                    <input className='theButton' type="submit" value="Update" />


                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;



