import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import './admin.css'

// const tab_list = [Profile, Home]

export const Admin = () => {

    const [currtab, setCurrtab] = useState(1);

    const toggle = () => {
        setCurrtab()
    }
    return (
        <div>
            <Navbar />

            <div className="farmeasy__admin section__padding">
                <div className="farmeasy__admin-tabscontainer">
                    <div className="farmeasy__admin-tab">
                        <button onClick={() => { setCurrtab(1) }}>Profile</button>
                    </div>
                    <div className="farmeasy__admin-tab">
                        <button onClick={() => { setCurrtab(2) }}>Home</button>
                    </div>
                </div>

                <div className="farmeasy__admin-container">
                    {((currtab === 1) && <Profile />)}
                    {((currtab === 2) && <Home />)}
                    
                </div>


            </div>
        </div>

    )
}

export default Admin;
