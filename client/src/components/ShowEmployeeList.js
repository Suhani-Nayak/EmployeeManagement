import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EmployeeCard from './EmployeeCard';

function ShowEmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io/api/employees')
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEmployeeList ->');
        console.log(err)
      });
  }, []);

  const employeeList =
    employees.length === 0
      ? 'there is no employee record!'
      : employees.map((employee, k) => <EmployeeCard employee={employee} key={k} />);

  return (
    <div className='ShowEmployeeList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Employees List</h2>
          </div>

          <div className='col-md-11'>
            <Link 
            to='/create-employee'
            className='btn btn-outline-warning float-right' 
            >
              + Add New Employee
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{employeeList}</div>
      </div>
    </div>
  );
}

export default ShowEmployeeList;