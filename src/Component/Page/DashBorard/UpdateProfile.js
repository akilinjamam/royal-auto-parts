import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth)

    const { uId } = useParams()

    const navigate = useNavigate()

    const updateProfile = (event) => {

        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkdin = event.target.linkdin.value;

        const updateProfileData = {

            education: education,
            location: location,
            linkdin: linkdin
        }

        navigate('dashboard/myProfile')

        // send data to the server:
        const url = `https://royal-autoparts-re-server.vercel.app/profile/${uId}`
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
    return (
        <div>
            <div className='text-left'>


                <h2 className='color font-bold text-2xl text-left theFonts'>Update profile </h2>
                <br />
                <p className='text-red-400 pb-3 border-b-2 border-red-400 mr-4'>Profile ID : {uId}</p><br />

                <form onSubmit={updateProfile} action="">

                    <textarea style={{ background: "none", border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }} type="text" name='education' placeholder="Type Education" required />
                    <br /><br />
                    <input style={{ background: "none", border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }} type="text" name='location' placeholder="Type Location City/District" required /><br /><br />

                    <input style={{ background: "none", border: "1px solid gray", borderRadius: "10px", padding: '7px', width: '300px' }} type="text" name='linkdin' placeholder="Type Linkdin profile name" required /><br /><br />

                    <input className='theButton' type="submit" value="Update" />


                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;



