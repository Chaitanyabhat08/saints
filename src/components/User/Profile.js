import React, { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader/Loader';
import "./Profile.css";
import { LoadUser } from '../../actions/userAction';

const Profile = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user || !isAuthenticated) {
            dispatch(LoadUser());
            navigateTo('/users/loginUser');
         }
    }, [navigateTo, isAuthenticated, user,dispatch]);
    return (
        <Fragment>
            {loading ?
                (<Fragment>
                    <Loader />
                </Fragment>) : (
                    <Fragment>
                    <MetaData title={`${user.name}'s profile`} />
                    <div className="profileContainer">
                        <div className="row">
                            <h1>My Profile</h1>
                            <img src={user.avatar.url} alt={user.name} />
                            <div>
                                <h4>{user.name}</h4>
                            </div>
                            <button><Link to='/users/updateProfile'>Edit Profile</Link></button>
                        </div>
                        <div className="middle">
                            <div>
                                <h4>Contact</h4>
                                <input className="inputField" value={user.phoneNumber} disabled></input>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <input className="inputField" value={user.email} disabled></input>
                            </div>
                            <div>
                                <h4>Joined on</h4>
                                <input className="inputField" value={String(user.createdAt).substr(0, 10)} disabled></input>
                            </div>
                            <div className='address'>
                                <h4>Saved Address</h4>
                                <input className="inputField" value={user.address} disabled></input>
                            </div>
                            <div className="but">
                               <button className="buttonSet"> <Link to="/order/myOrders">My Orders</Link></button>
                                <button className="buttonSet"><Link to="/users/updatePassword">Update Password</Link></button>
                            </div>
                        </div>
                    </div>
                </Fragment >
            )}
            </Fragment>
      )
}

export default Profile