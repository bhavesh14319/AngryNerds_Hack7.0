import React, { useState } from 'react'
import Img from '../Dashboard/download.jpg'
import './orders.css'
import Ordercard from './Ordercard/Ordercard'

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

    const changeState = () => {
        setToggle(!toggle);
    }

    return (
        <div className="farmeasy__orders">
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
                        pending_orders.map((value) => {
                            return (
                                <Ordercard status="Pending Orders" orderlist={value} />
                            )
                        }))}
                {(!toggle) &&
                    (
                        completed_orders.map((value) => {
                            return (
                                <Ordercard status="Completed Orders" orderlist={value} />
                            )
                        }))}

            </div>
        </div>
    )
}

export default Orders