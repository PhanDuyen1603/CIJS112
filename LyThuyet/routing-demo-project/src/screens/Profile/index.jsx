import React from 'react';
import { Button, Tabs } from 'antd';
import CardUserOverview from '../../components/CardUserOverview';
// gọi component Link từ react-router
import { Link, Outlet, useNavigate } from 'react-router';

const mapKeyWithRoute = {
    'POSTS': 'my-posts',
    'PROFILE': 'information',
};

const Profile = () => {
    const navigate = useNavigate();
    const tabItems = [
        {
            key: 'POSTS',
            label: 'My posts'
        },
        {
            key: 'PROFILE',
            label: 'My Profile'
        }
    ];
    return (
        <div className='profilePage m-auto p-[18px] max-w-[90vw] min-h-[50vh] flex gap-[18px]'>
            <div className='flex-[0.25 p-[18px] bg-white'>
                <CardUserOverview />
            </div>
            <div className='flex-[0.75] bg-white  p-[18px]'>
                {/* sử dụng component Link, với to được khai báo giá trị đường dẫn /login */}
                <Link className='float-right' to={'/login'}>
                    <Button>
                        Log in
                    </Button>
                </Link>
                <Tabs
                    items={tabItems}
                    onChange={(key) => {
                        navigate(mapKeyWithRoute[key]);
                    }}
                />
                {/* <ListPost /> */}
                <Outlet />
            </div>
        </div>
    )
}

export default Profile;