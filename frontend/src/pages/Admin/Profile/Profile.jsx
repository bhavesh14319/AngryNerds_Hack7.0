import React, { useState } from 'react'
import Card from '../Card/Card'
import profilepic from './download.png'
import './profile.css'
import { Avatar } from '@mui/material';


let count = 4;

const new_list = [
    {
        name: 'parth0',
        imgSrc: profilepic,
    },
    {
        name: 'parth1',
        imgSrc: profilepic,
    },
    {
        name: 'parth2',
        imgSrc: profilepic,
    },
    {
        name: 'parth3',
        imgSrc: profilepic,
    }
]

const Profile = (props) => {
    const { data } = props;
    const [view, setView] = useState(false);

    const viewchange = (e) => {
        e.preventDefault();
        setView(true);
    }
    return (
        <div className="farmeasy__profile">
            <div className="farmeasy__profile-unverified">
                <div className='farmeasy__profile-box'></div>
                <p>Unverified Users</p>
            </div>
            <div className="farmeasy__profiles">

                {
                    data.map((data) => {
                        return <Card name={data.first_name} imgSrc={data.image} />
                    })
                }

            </div>
            <div className="farmeasy__profile-viewall">
                <button>
                    <p>view All</p>
                </button>
            </div>
        </div>
    )
}

export default Profile