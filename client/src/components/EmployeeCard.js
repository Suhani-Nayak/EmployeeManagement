import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const EmployeeCard = (props) => {
  const employee = props.employee



  return (
    <div className='card-container'>
      <img
        src='https://thumbs.dreamstime.com/b/black-solid-icon-employee-applicant-man-logo-symbol-146530494.jpg'
        alt='Employees'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={ `/show-employee/${employee._id}` }>
            {employee.name}  
          </Link> 
        </h2>
        <h3>{employee.dateofbirth}</h3>
        <p>{employee.profession}</p>
      </div>
    </div>  
  )
}

export default EmployeeCard