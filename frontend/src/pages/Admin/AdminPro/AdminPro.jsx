import React from 'react'
import './adminpro.css'
import Img from '../AdminPro/download.png'

let admin_data = [
    {
        first_name : 'Bhavesh',
        last_name : 'Mali',
        phone : '9323423343',
        email : 'some@gmail.com',
        image : Img,
    }
]

const AdminPro = () => {
  return (
    <div className="farmeasy__adminpro">
        <div className="farmeasy__adminpro-img">
            <img src = {admin_data.image}></img>
        </div>
        <div className="farmeasy__adminpro-firstname">
            <p>First Name</p>
            <p>{admin_data.first_name}</p>
        </div>
        <div className="farmeasy__adminpro-adminpro-lastname">
            <p>Last Name</p>
            <p>{admin_data.last_name}</p>
        </div>
        <div className="farmeasy__adminpro-adminpro-phone">
            <p>Phone Number</p>
            <p>{admin_data.phone}</p>
        </div>
        <div className="farmeasy__adminpro-adminpro-email">
            <p>Email</p>
            <p>{admin_data.email}</p>
        </div>
    </div>
  )
}

export default AdminPro