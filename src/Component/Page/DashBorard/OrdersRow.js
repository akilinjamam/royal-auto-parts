import React from 'react';

const OrdersRow = ({ order, index }) => {
    return (
        <div>
            <tr class="active">
                <th>{index + 1}</th>
                <td>{order.partsName}</td>
                <td>{order.userName}</td>
                <td>{order.userEmail}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.priceQuantity}</td>
                <td>{order.phne}</td>
                <td>{order.address}</td>
                <td>{order.address}</td>

            </tr>
        </div>
    );
};

export default OrdersRow;