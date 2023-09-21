import React, { useState } from 'react'
import ProfileUi from './ProfileUi'
import useHttp from '../../hooks/use-http';
import ChangePasswordUi from './ChangePasswordUi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
const Profile = () =>
{
    const navigate = useNavigate();
    const {
        isLoading: isLoadingEditProfile,
        sendRequest: editProfile
    } = useHttp();
    const {
        isLoading: isLoadingChangePassword,
        sendRequest: changePassword
    } = useHttp();
    const profileData = useSelector(state => state.auth.userData);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    let isUserNameChanged = false;
    const handleEditProfile = (values) =>
    {
        let submitData = {};
        for (const key in values)
        {
            if (values[key] !== profileData[key])
            {
                submitData[key] = values[key];
                if (key === "userName") isUserNameChanged = true;
            }
        }
        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                dispatch(authActions.updateUserData(values))
                setIsEdit(false)
                //i logout when username change bcs token will be invalid
                if (isUserNameChanged) handleLogout();
            }
        };
        editProfile(
            {
                url: "editProfile",
                method: "PATCH",
                body: submitData,
            },
            getResponse
        );
    }
    const handleChangePassword = (values) =>
    {

        const getResponse = ({ message }) =>
        {
            if (message === "success")
            {
                handleCloseChangePassword()
            }
        };
        changePassword(
            {
                url: "changePassword",
                method: "PATCH",
                body: values,
            },
            getResponse
        );
    }
    const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
    const handleCloseChangePassword = () =>
    {
        setIsChangePasswordOpen(false)
    }
    const handleOpenChangePassword = () =>
    {
        setIsChangePasswordOpen(true)
    }
    const role = useSelector(state=>state.auth.role)
    const handleLogout = () =>
    {
        dispatch(authActions.logout());
        navigate(`/${role}/login`)
    }
    return (
        <>
            <ProfileUi
                profileData={profileData}
                handleEditProfile={handleEditProfile}
                isLoadingEditProfile={isLoadingEditProfile}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                handleOpenChangePassword={handleOpenChangePassword}
                handleLogout={handleLogout}
            />
            <ChangePasswordUi
                open={isChangePasswordOpen}
                handleClose={handleCloseChangePassword}
                handleChangePassword={handleChangePassword}
                isLoadingChangePassword={isLoadingChangePassword} />
        </>

    )
}

export default Profile