const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  dateofbirth: {
    type: Date
   
  },
  profession: {
    type: String
  },
  joined_date: {
    type: Date
  },
  salary: {
    type: String
  },
  retired_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema);