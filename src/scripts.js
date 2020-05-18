// Modules in the browser require full paths and extensions
import * as api from './api/index.js'

import { convertDOBToAge, processFormData } from './utils/index.js'

const app = document.querySelector('#app')

// Clone the 'document fragment'
const templateContent = app.querySelector('template').content.cloneNode(true)
const ths = ['Name', 'Age', 'Salary']

const tbody = templateContent.querySelector('tbody')

// Maintain a reference to this 1️ for adding it back later.
const loader = tbody.querySelector('#loader')

const formHandlers = {
  addEmployee (emp) {
    emp.employee_age = convertDOBToAge(emp.employee_age)
    api.addEmployee(emp)
  }
}

const state = {
  employees: [],
  headings: ['name', 'age', 'salary']
}

// 'thead tr' starts off empty
templateContent.querySelector('thead tr').innerHTML = ths
  .map((th) => `<th>${th}</th>`)
  .join(' ')

// Add all of the elements to '#app'
app.appendChild(templateContent)

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault()

    // process the form data and pass this object into the correct formHandler
    formHandlers[form.id](processFormData(form))
  })
});

// Use IIFE as we definitely want to TRY to 'initialize' our app with the data
(async () => {
  try {
    const employees = await api.getAllEmployees()

    /**
     * Just replace the contents of 'tbody' outright.
     * We have a reference to 'loader.'
     */
    tbody.innerHTML = employees
      .map(
        ({ employee_name: name, employee_age: age, employee_salary: salary }) => `
          <tr class="flex flex--justify-content-space-between">
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
        <td>'Currently facig issue regardig db', ${error}</td>
      </tr>
    `
  }
})()
