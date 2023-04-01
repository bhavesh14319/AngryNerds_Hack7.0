import React from 'react'
import '../../Dashboard/Ordercard/ordercard.css'

const Ordercard = ({ status, orderlist }) => {
    return (
        <div className="farmeasy__ordercard">
            <div className="farmeasy__ordercard-img">
                <img src={orderlist.src} ></img>
            </div>
            <div className="farmeasy__ordercard-info">
                <div className="farmeasy__ordercard-info__name ordercard__flex">
                    <p className='ordercard-info__topic'>Name</p>
                    <p className = "ordercard-info__desc">{orderlist.name}</p>
                </div>

                <div className="farmeasy__ordercard-info__price ordercard__flex">
                    <p className='ordercard-info__topic'>Price</p>
                    <p className = "ordercard-info__desc">{orderlist.price}</p>
                </div>

                <div className="farmeasy__ordercard-info__category ordercard__flex">
                    <p className='ordercard-info__topic'>Category</p>
                    <p className = "ordercard-info__desc">{orderlist.category}</p>
                </div>

                <div className="farmeasy__ordercard-info__seller ordercard__flex">
                    <p className='ordercard-info__topic'>Seller</p>
                    <p className = "ordercard-info__desc">{orderlist.seller}</p>
                </div>
            </div>
        </div>
    )
}

export default Ordercard