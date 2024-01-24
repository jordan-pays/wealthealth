import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
function EmployeeList() {
  const employees = useSelector((state) => state.employees);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    {
      name: "Street",
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Zip Code",
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  const [filterText, setFilterText] = useState("");

  const filteredItems = employees.filter(
    (item) =>
      item.lastName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
      item.department.toLowerCase().includes(filterText.toLowerCase()) ||
      item.street.toLowerCase().includes(filterText.toLowerCase()) ||
      item.city.toLowerCase().includes(filterText.toLowerCase()) ||
      item.state.toLowerCase().includes(filterText.toLowerCase()) ||
      item.zipCode.toString().includes(filterText) ||
      item.dateOfBirth.toString().includes(filterText) ||
      item.startDate.toString().includes(filterText)
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 10 }}>Search: </div>
        <input
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
        />
      </div>
    );
  }, [filterText]);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <div className="container-table">
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          responsive
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          persistTableHead
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default EmployeeList;
