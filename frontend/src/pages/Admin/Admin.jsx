import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import Navbar from '../../components/navbar/Navbar'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import './admin.css'

// const tab_list = [Profile, Home]

export const Admin = () => {

    const [currtab, setCurrtab] = useState(1);
    const [unverifiedUser, setUnverifiedUser] = useState();
    const toggle = () => {
        setCurrtab()
    }
    const getUnverifiedUser = async () => {
        const data = await axios.get('http://localhost:3000/api/admin/v1/getUnverifiedUsers');
        console.log(data.data.data.users)
        setUnverifiedUser(data.data.data.users);
    };
    useEffect(() => {
        getUnverifiedUser();
    }, []);
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
                    {((currtab === 1) && <Profile data={unverifiedUser} />)}
                    {((currtab === 2) && <Home />)}

                </div>


            </div>
        </div>

    )
}

export default Admin;
