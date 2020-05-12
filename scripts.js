import { getAllEmployees } from './api/index.js'

// IIFE
(async () => {
  const employees = await getAllEmployees()

  tbody.innerHTML = employees.map(({ employee_name: name, employee_age: age, employee_salary: salary }) => `
  <tr>
  <td>${name}</td>
  <td>${age}</td>
  <td>${salary}</td>
  </tr>
  `
  ).join(' ')
})()

const tbody = document.querySelector('tbody')
