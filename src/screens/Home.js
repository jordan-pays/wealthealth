import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "modal-wh-jrdnps";
import "modal-wh-jrdnps/style.css";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addEmploye } from "../slices/thunks";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const states = [
    {
      label: "Alabama",
      value: "AL",
    },
    {
      label: "Alaska",
      value: "AK",
    },
    {
      label: "American Samoa",
      value: "AS",
    },
    {
      label: "Arizona",
      value: "AZ",
    },
    {
      label: "Arkansas",
      value: "AR",
    },
    {
      label: "California",
      value: "CA",
    },
    {
      label: "Colorado",
      value: "CO",
    },
    {
      label: "Connecticut",
      value: "CT",
    },
    {
      label: "Delaware",
      value: "DE",
    },
    {
      label: "District Of Columbia",
      value: "DC",
    },
    {
      label: "Federated States Of Micronesia",
      value: "FM",
    },
    {
      label: "Florida",
      value: "FL",
    },
    {
      label: "Georgia",
      value: "GA",
    },
    {
      label: "Guam",
      value: "GU",
    },
    {
      label: "Hawaii",
      value: "HI",
    },
    {
      label: "Idaho",
      value: "ID",
    },
    {
      label: "Illinois",
      value: "IL",
    },
    {
      label: "Indiana",
      value: "IN",
    },
    {
      label: "Iowa",
      value: "IA",
    },
    {
      label: "Kansas",
      value: "KS",
    },
    {
      label: "Kentucky",
      value: "KY",
    },
    {
      label: "Louisiana",
      value: "LA",
    },
    {
      label: "Maine",
      value: "ME",
    },
    {
      label: "Marshall Islands",
      value: "MH",
    },
    {
      label: "Maryland",
      value: "MD",
    },
    {
      label: "Massachusetts",
      value: "MA",
    },
    {
      label: "Michigan",
      value: "MI",
    },
    {
      label: "Minnesota",
      value: "MN",
    },
    {
      label: "Mississippi",
      value: "MS",
    },
    {
      label: "Missouri",
      value: "MO",
    },
    {
      label: "Montana",
      value: "MT",
    },
    {
      label: "Nebraska",
      value: "NE",
    },
    {
      label: "Nevada",
      value: "NV",
    },
    {
      label: "New Hampshire",
      value: "NH",
    },
    {
      label: "New Jersey",
      value: "NJ",
    },
    {
      label: "New Mexico",
      value: "NM",
    },
    {
      label: "New York",
      value: "NY",
    },
    {
      label: "North Carolina",
      value: "NC",
    },
    {
      label: "North Dakota",
      value: "ND",
    },
    {
      label: "Northern Mariana Islands",
      value: "MP",
    },
    {
      label: "Ohio",
      value: "OH",
    },
    {
      label: "Oklahoma",
      value: "OK",
    },
    {
      label: "Oregon",
      value: "OR",
    },
    {
      label: "Palau",
      value: "PW",
    },
    {
      label: "Pennsylvania",
      value: "PA",
    },
    {
      label: "Puerto Rico",
      value: "PR",
    },
    {
      label: "Rhode Island",
      value: "RI",
    },
    {
      label: "South Carolina",
      value: "SC",
    },
    {
      label: "South Dakota",
      value: "SD",
    },
    {
      label: "Tennessee",
      value: "TN",
    },
    {
      label: "Texas",
      value: "TX",
    },
    {
      label: "Utah",
      value: "UT",
    },
    {
      label: "Vermont",
      value: "VT",
    },
    {
      label: "Virgin Islands",
      value: "VI",
    },
    {
      label: "Virginia",
      value: "VA",
    },
    {
      label: "Washington",
      value: "WA",
    },
    {
      label: "West Virginia",
      value: "WV",
    },
    {
      label: "Wisconsin",
      value: "WI",
    },
    {
      label: "Wyoming",
      value: "WY",
    },
  ];

  const department = [
    {
      value: "Sales",
      label: "Sales",
    },
    {
      value: "Marketing",
      label: "Marketing",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
    {
      value: "Human Resources",
      label: "Human Resources",
    },
    {
      value: "Legal",
      label: "Legal",
    },
  ];

  function toggle() {
    setOpenModal((res) => !res);
  }

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      startDate: "",
      department: department[0].value,
      street: "",
      city: "",
      state: states[0].value,
      zipCode: "",
    },
    onSubmit: (values) => {
      dispatch(addEmploye(values));
      toggle();
    },
  });

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form>
          <label for="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={validation.values.firstName}
            onChange={validation.handleChange}
          />

          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={validation.values.lastName}
            onChange={validation.handleChange}
          />

          <label for="dateOfBirth">Date of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            value={validation.values.dateOfBirth}
            onChange={validation.handleChange}
          />

          <label for="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={validation.values.startDate}
            onChange={validation.handleChange}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label for="street">Street</label>
            <input
              id="street"
              type="text"
              value={validation.values.street}
              onChange={validation.handleChange}
            />

            <label for="city">City</label>
            <input
              id="city"
              type="text"
              value={validation.values.city}
              onChange={validation.handleChange}
            />
            <label for="state">State</label>
            <Select
              id="state"
              name="state"
              defaultValue={states[0]}
              onChange={(res) => {
                validation.setValues((val) => ({ ...val, state: res.value }));
              }}
              options={states}
            />
            <label for="zipCode">Zip Code</label>
            <input
              id="zipCode"
              type="number"
              value={validation.values.zipCode}
              onChange={validation.handleChange}
            />
          </fieldset>

          <label for="department">Department</label>
          <Select
            id="department"
            name="department"
            defaultValue={department[0]}
            onChange={(res) => {
              validation.setValues((val) => ({
                ...val,
                department: res.value,
              }));
            }}
            options={department}
          />
        </form>
        <button
          type="button"
          style={{ marginTop: 10 }}
          onClick={() => {
            validation.handleSubmit();
          }}
        >
          Save
        </button>

        <Modal isOpen={openModal} toggle={toggle}>
          <div>Employee Created!</div>
        </Modal>
      </div>
    </>
  );
}

export default Home;
