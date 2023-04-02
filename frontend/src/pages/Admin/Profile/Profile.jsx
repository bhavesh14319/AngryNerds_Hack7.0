import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import profilepic from './download.png'
import './profile.css'
import { Link } from 'react-router-dom';
import ProfileFull from '../Home/ProfileFull/ProfileFull';

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
    // const getSellerRequests = ()
    useEffect(() => {
        // getSellerRequests();
    }, []);
    return (
        <>
        <div className="farmeasy__profile">
            <div className="farmeasy__profile-unverified">
                <div className='farmeasy__profile-box'></div>
                     <p>Unverified Users</p>
                 </div>
                    <div className="farmeasy__profiles">
                            <>
                            {
                                data?.map((data) => {
                                    return <Card name={data.first_name} imgSrc={data.image} />
                                })
                            }
                            </>
                        </div>

                        
                        <div className="farmeasy__profile-viewall">
                            <button>
                                <p>view All</p>
                            </button>
                        </div>
                </div>
        
            <div className="farmeasy__profile">
                <div className="farmeasy__profile-unverified">
                    <div className='farmeasy__profile-box'></div>
                    <p>Seller Request</p>
                </div>
                <div className="farmeasy__profiles">

                    <Card name={new_list[0].name} imgSrc={new_list[0].imgSrc} />
                    <Card name={new_list[1].name} imgSrc={new_list[1].imgSrc} />
                    <Card name={new_list[2].name} imgSrc={new_list[2].imgSrc} />

                </div>
                <div className="farmeasy__profile-viewall">
                    <Link to={'/full'} >
                        <button>
                            <p>view All</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Profile