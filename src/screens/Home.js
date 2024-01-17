import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import Modal from "modal-wh-jrdnps"
import "modal-wh-jrdnps/style.css"

function Home() {

	const validation = useFormik({
		enableReinitialize: true,
		initialValues: {
			firstName: "",
			lastName: "",
			dateOfBirth: "",
			startDate: "",
			department: "",
			street: "",
			city: "",
			state: "",
			zipCode: ""
		},
		onSubmit: (values) => {
			console.log(values)
		}
	})

	return (
		<>
			<div className="title">
				<h1>HRnet</h1>
			</div>
			<div className="container">
				<Link to="/employee-list">View Current Employees</Link>
				<h2>Create Employee</h2>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						validation.handleSubmit();
						return false;
					}}
				>
					<label for="firstName">First Name</label>
					<input type="text" id="firstName" value={validation.values.firstName} onChange={validation.handleChange} />

					<label for="lastName">Last Name</label>
					<input type="text" id="lastName" value={validation.values.lastName} onChange={validation.handleChange} />

					<label for="dateOfBirth">Date of Birth</label>
					<input id="dateOfBirth" type="date" value={validation.values.dateOfBirth} onChange={validation.handleChange} />

					<label for="startDate">Start Date</label>
					<input id="startDate" type="date" value={validation.values.startDate} onChange={validation.handleChange} />

					<fieldset className="address">
						<legend>Address</legend>

						<label for="street">Street</label>
						<input id="street" type="text" value={validation.values.street} onChange={validation.handleChange} />

						<label for="city">City</label>
						<input id="city" type="text" value={validation.values.city} onChange={validation.handleChange} />

						<label for="state">State</label>
						<select name="state" id="state" value={validation.values.state} onChange={validation.handleChange}></select>

						<label for="zipCode">Zip Code</label>
						<input id="zipCode" type="number" value={validation.values.zipCode} onChange={validation.handleChange} />
					</fieldset>

					<label for="department">Department</label>
					<select name="department" id="department" value={validation.values.department} onChange={validation.handleChange}>
						<option>Sales</option>
						<option>Marketing</option>
						<option>Engineering</option>
						<option>Human Resources</option>
						<option>Legal</option>
					</select>
				</form>
				<button type='submit' >Save</button>
				<Modal isOpen={true}>
					<div>Test</div>
				</Modal>
			</div>
		</>
	)
}

export default Home