import { useEffect, useState } from 'react';

const useTools = () => {

    const [parts, setParts] = useState([])


    useEffect(() => {
        const url = 'https://royal-autoparts-re-server.onrender.com/parts';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])


    return [parts]
};

export default useTools;