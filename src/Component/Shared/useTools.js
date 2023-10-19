import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useTools = () => {

    // const [parts, setParts] = useState([])
    const { data: parts, isLoading } = useQuery("parts", () => fetch('https://royal-autoparts-re-server.onrender.com/parts', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()));

    console.log(parts);


    return [parts, isLoading]
};

export default useTools;