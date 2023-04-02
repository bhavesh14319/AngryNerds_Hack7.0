import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import Img from '../Dashboard/download.jpg'
import './orders.css'
import Ordercard from './Ordercard/Ordercard.jsx'
const Img = "http://res.cloudinary.com/dze7hlopg/image/upload/v1680375926/image-aadhar-pvc_card-300x183.jpg"
let pending_orders = [
    {
        src: Img,
        name: 'Nitro fertilizer',
        price: '2000₹',
        category: 'fertilizer',
        seller: 'Rana co.',
    },
    {
        src: Img,
        name: 'heavy tractor',
        price: '30000₹',
        category: 'vehicle',
        seller: 'bajaj',
    },
    {
        src: Img,
        name: 'Plough',
        price: '2000₹',
        category: 'farming',
        seller: 'R.N. distributors',
    }
]

let completed_orders = [
    {
        src: Img,
        name: 'Kerosene',
        price: '2000₹',
        category: 'Chemical',
        seller: 'Rana co.',
    },
    {
        src: Img,
        name: 'Bull',
        price: '30000₹',
        category: 'vehicle',
        seller: 'bajaj',
    },
]

const Orders = () => {

    const [toggle, setToggle] = useState(true);

    const [pendingOrders, setPendingOrder] = useState([]);
    const [completedOrders, setcompletedOrder] = useState([]);

    const changeState = () => {
        setToggle(!toggle);
    }
    const pendingOrder = async () => {
        const data = await axios('http://localhost:3000/api/orders/v1/pendingOrder');
        setPendingOrder(data.data.data)
    };
    const completedOrder = async () => {
        const data = await axios('http://localhost:3000/api/orders/v1/completedOrder');
        setcompletedOrder(data.data.data)
    }
    useEffect(() => {
        completedOrder();
        pendingOrder();
    }, []);
    return (
        <div className="farmeasy__orders"style={{marginTop:"20px"}}>
            <div className="farmeasy__orders-option__container">
                <div className="farmeasy__orders-option__container-pending">
                    <button onClick={changeState}>Pending</button>
                </div>
                <div className="farmeasy__orders-option__container-completed">
                    <button onClick={changeState}>Completed</button>
                </div>
            </div>
            <div className="farmeasy__orders-order__containers">
                {(toggle) &&
                    (
                        pendingOrders?.map((value) => {
                            return (
                                <Ordercard status="Pending Orders" orderlist={value} />
                            )
                        }))}
                {(!toggle) &&
                    (
                        completedOrders?.map((value) => {
                            return (
                                <Ordercard status="Completed Orders" orderlist={value} />
                            )
                        }))}

            </div>
        </div>
    )
}

export default Orders