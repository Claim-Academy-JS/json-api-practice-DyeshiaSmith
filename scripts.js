import { getAllEmployees } from './api/index.js'

const tbody = document.querySelector('tbody')

getAllEmployees().then(employees => {
  const employeesHtml = employees.map(({ employee_name: name, employee_age: age, employee_salary: salary }) => {
    return `
    <tr>
      <td>${name}</td>
      <td>${age}</td>
      <td>${salary}</td>
      </tr>
    `
  }).join(' ')

  tbody.innerHTML = employeesHtml
})
