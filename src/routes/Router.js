import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'
import EmployeeList from '../screens/EmployeeList'

function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="employee-list" element={<EmployeeList />} />
        </Routes>
    )
}

export default Router