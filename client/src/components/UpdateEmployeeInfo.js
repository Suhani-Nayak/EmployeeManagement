import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateEmployeeInfo(props) {
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    dateofbirth: '',
    profession: '',
    joined_date: '',
    salary: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io/api/employees/${id}`)
      .then((res) => {
        setEmployee({
          name: res.data.name,
          id: res.data.id,
          dateofbirth: res.data.dateofbirth,
          profession: res.data.profession,
          joined_date: res.data.joined_date,
          salary: res.data.salary,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateEmployeeInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: employee.name,
      id: employee.id,
      dateofbirth: employee.dateofbirth,
      profession: employee.profession,
      joined_date: employee.joined_date,
      salary: employee.salary,
    };

    axios
      .put(`https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io/api/employees/${id}`, data)
      .then((res) => {
        navigate(`/show-employee/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateEmployeeInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateEmployeeInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Employee</h1>
            <p className='lead text-center'>Update Employee's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name of the Employee'
                name='name'
                className='form-control'
                value={employee.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='id'>ID</label>
              <input
                type='text'
                placeholder='ID'
                name='id'
                className='form-control'
                value={employee.id}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='dateofbirth'>DateofBirth</label>
              <input
                type='date'
                placeholder='Date of Birth'
                name='dateofbirth'
                className='form-control'
                value={employee.dateofbirth}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='profession'>Profession</label>
              <textarea
                type='text'
                placeholder='Profession of the Employee'
                name='profession'
                className='form-control'
                value={employee.profession}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='joined_date'>Joined Date</label>
              <input
                type='date'
                placeholder='Joined Date'
                name='joined_date'
                className='form-control'
                value={employee.joined_date}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='salary'>Salary</label>
              <input
                type='text'
                placeholder='Salary of Employee'
                name='salary'
                className='form-control'
                value={employee.salary}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Employee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployeeInfo;







