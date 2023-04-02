import React from 'react'
import './adminpro.css'
import Img from '../AdminPro/download.png'

let admin_data =
{
    first_name: 'Bhavesh',
    last_name: 'Mali',
    phone: '9323423343',
    email: 'some@gmail.com',
    image: Img,
}

const AdminPro = () => {
    return (
        <div className="farmeasy__adminpro">
            <div className="farmeasy__adminpro-img">
                <img src={admin_data.image}></img>
            </div>
            <div className="farmeasy__adminpro-admindata">

                <div className="farmeasy__adminpro-admindata-firstname adminpro-container">
                    <p className='farmeasy__adminpro-topic'>First Name</p>
                    <p className='farmeasy__adminpro-desc'>{admin_data.first_name}</p>
                </div>
                <div className="farmeasy__adminpro-admindata-lastname adminpro-container">
                    <p className='farmeasy__adminpro-topic'>Last Name</p>
                    <p className='farmeasy__adminpro-desc'>{admin_data.last_name}</p>
                </div>
                <div className="farmeasy__adminpro-admindata-phone adminpro-container">
                    <p className='farmeasy__adminpro-topic'>Phone Number</p>
                    <p className='farmeasy__adminpro-desc'>{admin_data.phone}</p>
                </div>
                <div className="farmeasy__adminpro-admindata-email adminpro-container">
                    <p className='farmeasy__adminpro-topic'>Email</p>
                    <p className='farmeasy__adminpro-desc' >{admin_data.email}</p>
                </div>
            </div>

        </div>
    )
}

export default AdminPro