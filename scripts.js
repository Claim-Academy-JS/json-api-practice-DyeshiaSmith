// Modules in the browser require full paths and extensions
import { getAllEmployees } from './api/index.js'

(async () => {
  try {
    const employees = await getAllEmployees()

    tbody.innerHTML = employees
      .map(
        ({ employee_name: name, employee_age: age, employee_salary: salary }) => `
  <tr>
  <td>${name}</td>
  <td>${age}</td>
  <td>${salary}</td>
  </tr>
  `
      )
      .join('')
  } catch (error) {
    tbody.innerHTML = `
      <tr>
        <td>'Currently facig issue regardig db', ${error}</td>
      </tr>
    `
  }
})()

const app = document.querySelector('#app')
const tbody = document.querySelector('tbody')
const templateContent = app.querySelector('template').content.cloneNode(true)

const ths = ['name', 'Age', 'Salary']

templateContent.querySelector('head tr').innerHTML = ths
  .map((th) => `<th>${th}</th>`)
  .join(' ')

// TODO: Map over array and generate th tags for each of the th's

app.appendChild(templateContent)
