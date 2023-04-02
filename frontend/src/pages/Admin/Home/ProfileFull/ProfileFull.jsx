import React from 'react'
import Card from '../../Card/Card'
import profilepic from '../ProfileFull/download.png'
import './profilefull.css'

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
    },
    {
        name: 'parth4',
        imgSrc: profilepic,
    },
    {
        name: 'parth5',
        imgSrc: profilepic,
    }
]

const ProfileFull = () => {
    return (
        <div className="farmeasy__profilefull">
            <div className="farmeasy__profilefull-unverified">
                <div className='farmeasy__profile-box'></div>
                <p>Unverified Users</p>
            </div>
            <div className="farmeasy__profilefull-profiles">
                {(new_list.map((value) => {
                    return <Card name={value.name} imgSrc={value.imgSrc} />
                }))}
            </div>


        </div>
    )
}

export default ProfileFull