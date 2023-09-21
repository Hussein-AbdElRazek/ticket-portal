import React from 'react'
import AdminsList from './AdminsList'
import TabsBar from '../../../components/TabsBar';
import { Route, Routes } from 'react-router-dom';
import CreateAdmin from './CreateAdmin';

const Admins = () =>
{
    const tabs = [
        { value: 0, label: "Admins List", to: "/admins" },
        { value: 1, label: "Create Admin", to: "create" },
    ];
    const tabsMap = {
        "/admins": 0,
        "/admins/create": 1,
    };
    return (
        <>
            <TabsBar
                tabs={tabs}
                tabsMap={tabsMap}
            />
            <Routes>
                <Route index element={<AdminsList/>}/>
                <Route path="create" element={<CreateAdmin/>}/>
            </Routes>

        </>
    )
}

export default Admins