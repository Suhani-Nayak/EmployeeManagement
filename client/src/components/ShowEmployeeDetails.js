import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowEmployeeDetails(props) {
  const [employee, setEmployee] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io/api/employees/${id}`)
      .then((res) => {
        setEmployee(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowEmployeeDetails');
        console.log(err)
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`https://5000-suhaninayak-employeeman-fq4udn4acg5.ws-us94.gitpod.io//api/employees/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowEmployeeDetails_deleteClick');
      });
  };
  const EmployeeItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Name</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>DateOfBirth</td>
            <td>{employee.dateofbirth}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>ID</td>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <th scope='row'>4</th>
            <td>Salary</td>
            <td>{employee.salary}</td>
          </tr>
          <tr>
            <th scope='row'>5</th>
            <td>Joined Date</td>
            <td>{employee.joined_date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Profession </td>
            <td>{employee.profession}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowEmployeeDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Employee List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Employee's Record</h1>
            <p className='lead text-center'>View Employee's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{EmployeeItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(employee._id);
              }}
            >
              Delete Employee
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-employee/${employee._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Employee
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowEmployeeDetails;