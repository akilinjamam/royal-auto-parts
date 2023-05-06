import { useEffect, useState } from "react"

const useToken = (user) => {

    const [token, setToken] = useState('');
    useEffect(() => {

        const email = user?.user?.email;
        const currentUser = { email: email };
        console.log({ currentUser });


        if (email) {

            fetch(`https://royal-autoparts-re-server-production.up.railway.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Token is now inside', data)

                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user])

    return [token]
}


export default useToken