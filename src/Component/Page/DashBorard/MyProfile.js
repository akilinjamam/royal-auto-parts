import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate()




    const handleProfile = (event) => {

        event.preventDefault();

        const education = event.target.education.value;
        const location = event.target.location.value;
        const linkdin = event.target.linkdin.value

        const profile = {

            name: user.displayName,
            email: user.email,
            education: education,
            location: location,
            linkdin: linkdin

        }



        const email = user?.email
        fetch(`https://royal-autoparts-re-server-production.up.railway.app/profile?email=${email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(profile)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success(' saved and got to your profile from dashboard');

                }
            })
    }
    return (
        <div className='  '>
            <div>
                <form onSubmit={handleProfile} action="">

                    <h2 className='color text-2xl text-left font-bold  mb-5 theFonts' >Add My Profile</h2>

                    <div className='flex text-white ml-1'>
                        <div>
                            <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '7px' }} readOnly type="text" name='name' value={user.displayName} /><br /><br />

                            <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '7px' }} type="text" name='email' value={user.email} /><br /><br />

                            <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '7px', width: '100%' }} type="text" name='education' placeholder="Type Education" required />
                        </div>

                        <div className='ml-10'>
                            <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '7px' }} type="text" name='location' placeholder="Type Location City/District" required /><br /><br />

                            <input style={{ background: 'none', border: '1px solid gray', borderRadius: '10px', padding: '7px' }} type="text" name='linkdin' placeholder="Type Linkdin profile name" required /><br /><br />

                            <input className=' theButton w-full  text-white  ' type="submit" value="SUBMIT" />
                        </div>
                    </div>







                </form>
            </div>
        </div>
    );
};

export default MyProfile;