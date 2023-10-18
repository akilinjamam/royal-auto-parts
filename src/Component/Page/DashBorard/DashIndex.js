import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useAdmin from '../../Shared/useAdmin';
import ManageAllOrders from './ManageAllOrders';
import MyOrder from './MyOrder';

const DashIndex = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            {
                admin ? <ManageAllOrders></ManageAllOrders> : <MyOrder></MyOrder>
            }
        </div>
    );
};

export default DashIndex;