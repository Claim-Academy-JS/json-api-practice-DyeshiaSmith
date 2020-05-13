// Modules in the browser require full paths and extensions
import { getAllEmployees } from './api/index.js'

(async () => {
  try {
    const employees = await getAllEmployees()

    loader.classList.toggle('loader')

    tbody.innerHTML += employees
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
      <tr class="flex flex--justify-content-space-between">
        <td>'Currently facing issue regarding db', ${error}</td>
      </tr>
    `
  }
})()

const app = document.querySelector('#app')
const templateContent = app.querySelector('template').content.cloneNode(true)

const tbody = templateContent.querySelector('tbody')
const loader = tbody.querySelector('#loader')
const ths = ['name', 'Age', 'Salary']

templateContent.querySelector('thead tr').innerHTML = ths
  .map((th) => `<th>${th}</th>`)
  .join(' ')

app.appendChild(templateContent)
