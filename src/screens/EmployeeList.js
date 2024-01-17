import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeList() {
    return (
        <div id="employee-div" class="container">
            <h1>Current Employees</h1>
            <table id="employee-table" class="display"></table>
            <Link to="/">Home</Link>
        </div>
    )
}

export default EmployeeList