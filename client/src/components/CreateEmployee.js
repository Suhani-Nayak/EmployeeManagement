import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateEmployee = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
   name: '',
    id: '', 
    dateofbirth: '',
    profession: '',
    joined_date: '',
    salary: '',
  });

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io/api/employees', employee)
      .then((res) => {
        setEmployee({
          name: '',
          id: '', 
          dateofbirth: '',
          profession: '',
          joined_date: '',
          salary: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateEmployee!');
        console.log('The error is -> ')
        console.log(err)
      });
  };

  return (
    <div className='CreateEmployee'>
      <div className='container'>
        <div className='row'> 
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-right'>
              Home
            </Link>
            <Link to='/show-list' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Employee</h1>
            <p className='lead text-center'>Create new employee</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                
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
                <input
                  type='text'
                  placeholder='ID'
                  name='id'
                  className='form-control'
                  value={employee.id}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date of Birth'
                  name='dateofbirth'
                  className='form-control'
                  value={employee.dateofbirth}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Profession of the Employee'
                  name='profession'
                  className='form-control'
                  value={employee.profession}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='joined_date'
                  name='joined_date'
                  className='form-control'
                  value={employee.joined_date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='salary of  employee'
                  name='salary'
                  className='form-control'
                  value={employee.salary}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;